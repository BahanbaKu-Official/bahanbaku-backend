const db = require('../models');
const Transaction = db.transaction;
const { simulateTransaction } = require('../utils/midtrans/simulateTransaction');
const { generateSimulateMidtransObj } = require('../utils/midtrans/generateMidtransSimulatorObj');

const simulate = async (req, res, next) => {
  try {
    const { transactionId } = req.body;
    const transaction = await Transaction.findByPk(transactionId)

    const midtrans = generateSimulateMidtransObj(transaction.paymentMethod, transaction.va, transaction.billerCode, transaction.billKey, transaction.gopayId, transaction.total);
    const simulate = await simulateTransaction(transaction.paymentMethod, midtrans);    
    
    console.log(midtrans);
    
    return res.status(200).json({
      success: true,
      message: 'all transactions grabbed',
      results: simulate,
    })
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  simulate,
}