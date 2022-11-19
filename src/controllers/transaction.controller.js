const db = require('../models');
const Transaction = db.transaction;
const Product = db.product;
const nanoid = require('../config/nanoid.config');
const { chargeTransaction } = require('../utils/midtrans/chargeTransaction');
const generateMidtransObj = require('../utils/midtrans/generateMidtransObj');
const vaParser = require('../utils/midtrans/vaParser');

const getTransactions = async (_, res, next) => {
  try {
    const transaction = await Transaction.findAll();
    
    return res.status(200).json({
      success: true,
      message: 'all transactions grabbed',
      results: transaction,
    })
  } catch (error) {
    next(error);
  }
}

const createTransaction = async (req, res, next) => {
  const transactionId = `TRC${nanoid(13)}`;
  const { userId } = req.user;
  const { recipeId } = req.params;
  const { products, paymentMethod, customerDetails } = req.body;
  let total = 0;
  const itemDetails = [];

  try {
    const transaction = await Transaction.create({
      ...req.body,
      transactionId,
      userId,
      recipeId,
      status: 'unpaid',
      paymentMethod,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    for (let i = 0; i < products.length; i++) {
      const product = await Product.findByPk(products[i].id);
      transaction.addProduct(product);
      total = (total + product.price * products[i].quantity);
      itemDetails.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: products[i].quantity,
      })
    }

    const midtrans = generateMidtransObj(paymentMethod, transactionId, total, itemDetails, customerDetails);
    const charge = await chargeTransaction(midtrans);

    const va = vaParser(paymentMethod,charge);

    await Transaction.update({
      total,
      midtransId: charge.transaction_id,
      gopayId: charge.actions ? charge.actions[1].url.split('=')[1] : null,
      va,
      billKey: charge.bill_key || null,
      billerCode: charge.biller_code || null,
    }, {
      where: {
        transactionId,
      }
    })

    return res.status(200).json({
      success: true,
      message: 'new transaction created',
      results: {
        paymentMethod,
        gopayId: charge.actions ? charge.actions[1].url.split('=')[1] : null,
        va,
        billKey: charge.bill_key || null,
        billerCode: charge.biller_code || null,
      },
    })
  } catch (error) {
    next(error);
  }
}

const getTransactionsByUser = async (req, res, next) => {
  const { userId } = req.user;

  try {
    const transaction = await Transaction.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: db.product,
          as: 'products'
        },
        {
          model: db.recipe,
          as: 'recipe',
        }
      ],
    });
    
    return res.status(200).json({
      success: true,
      message: 'all transaction from user grabbed',
      results: transaction,
    })
  } catch (error) {
    next(error);
  }
}

const confirmTransaction = async (req, res, next) => {
  const {
    order_id,
    transaction_status,
  } = req.body;

  const status = (() => {
    if (transaction_status == 'settlement') return 'paid';
    if (transaction_status == 'expired') return 'expired';
    return 'unpaid';
  })();

  try {
    const transaction = await Transaction.update({
      status,
    }, {
      where: {
        transactionId: order_id,
      }
    })

    return res.status(200).json({
      success: true,
      message: 'transaction status updated',
      results: transaction,
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getTransactions,
  createTransaction,
  getTransactionsByUser,
  confirmTransaction,
}