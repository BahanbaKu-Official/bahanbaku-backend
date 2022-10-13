const db = require('../models');
const Transaction = db.transaction;
const Product = db.product;
const nanoid = require('../config/nanoid.config');

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
  const transactionId = nanoid();
  const { userId } = req.user;
  const { recipeId } = req.params;
  const { products } = req.body;
  let total = 0;

  try {
    const transaction = await Transaction.create({
      ...req.body,
      transactionId,
      userId,
      recipeId,
      status: 'diproses',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    for (let index = 0; index < products.length; index++) {
      const product = await Product.findByPk(products[index]);
      transaction.addProduct(product);
      await product.decrement({ stock: 1 });
      total = (total + product.price);
    }

    await Transaction.update({
      total
    }, {
      where: {
        transactionId,
      }
    })

    return res.status(200).json({
      success: true,
      message: 'new transaction created',
      results: transaction,
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

module.exports = {
  getTransactions,
  createTransaction,
  getTransactionsByUser,
}