const db = require('../models');
const Transaction = db.transaction;
const Product = db.product;
const User = db.user;
const PaymentMethod = db.payment_method;
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
  const { products, paymentId, addressId } = req.body;
  let total = 0;
  const itemDetails = [];  

  if (!products || !paymentId) return next('400,Product and payment id must not empty');

  try {
    const user = await User.findByPk(userId);
    if (!user) return next('403,User is not valid');

    const payment_method = await PaymentMethod.findByPk(paymentId)
    const paymentCode = payment_method['paymentCode'];

    console.log(payment_method);
    console.log(paymentCode);

    const transaction = await Transaction.create({
      products,
      addressId,
      paymentId,
      transactionId,
      userId,
      recipeId,
      status: 'unpaid',
      paymentMethod:paymentCode,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    if (products.length < 1) return next('403,Product must not be 0');

    for (let i = 0; i < products.length; i++) {
      const product = await Product.findByPk(products[i].id);
      
      if (!product) return next('404,Product not found');
      if (products[i].quantity <= 0) return next('403,Quantity must more than 0');
      if (products[i].quantity > product.stock) return next('403,Quantity must not more than stock');
      transaction.addProduct(product);

      total = (total + product.price * products[i].quantity);
      itemDetails.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: products[i].quantity,
      })
    }
    
    const customerDetails = {
      "first_name":user.firstName,
      "last_name":user.lastName,
      "email":user.email,
      "phone":user.phoneNumber,
    }    

    const midtrans = generateMidtransObj(paymentCode, transactionId, total, itemDetails, customerDetails);
    const charge = await chargeTransaction(midtrans);

    const va = vaParser(paymentCode,charge);

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
        paymentMethod:paymentCode,
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

const getTransactionById = async (req, res, next) => {
  const { transactionId } = req.params;

  try {
    const transaction = await Transaction.findByPk(transactionId, {
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
    })

    return res.status(200).json({
      success: true,
      message: 'transaction grabbed by id',
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

const getPaymentMethod = async (req, res, next) => {  
  try {
    const payment_method = await PaymentMethod.findAll();    

    return res.status(200).json({
      success: true,
      message: 'Success get all payment method',
      results: payment_method,
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
  getPaymentMethod,
  getTransactionById,
}