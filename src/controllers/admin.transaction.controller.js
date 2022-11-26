const db = require('../models');
const Bank = db.bank;
const User = db.user;
const Transaction = db.transaction;

const getAllTransaction = async (req, res, next) => {
  const {userId} = req.user;

  try {
    const transaction = await Transaction.findAll();

    return res.status(200).json({
      success: true,
      message: 'All refunds grabbed',
      results: transaction,
    })
  } catch (error) {
    next(error);
  }
}

const updateTransactionStatus = async (req, res, next) => {
  const { transactionId } = req.params;
  const { status } = req.body;

  try {
    const transaction = await Transaction.findByPk(transactionId);
    if(!transaction) return next('404,Transaction not found');

    const update_transaction = await Transaction.update({
      status
    },{
      where:{
        transactionId
      }
    });

    return res.status(200).json({
      success: true,
      message: 'Success update transaction',      
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllTransaction,
  updateTransactionStatus
}