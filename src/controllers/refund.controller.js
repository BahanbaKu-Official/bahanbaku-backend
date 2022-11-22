const nanoid = require('../config/nanoid.config');
const refundEmail = require('../utils/refund/refundEmailNotification');
const sendEmail = require('../utils/email/sendEmail');
const db = require('../models');
const Refund = db.refund;
const Bank = db.bank;
const User = db.user;
const Transaction = db.transaction;

const createRefund = async (req, res, next) => {
  const { userId } = req.user;
  const { bankId, bankOwner, bankAccount } = req.body;
  const { transactionId } = req.params;
  const refundId = `RFD${nanoid(13)}`;
  
  try {
    if(!transactionId || !bankId || !bankOwner || !bankAccount) return next('400,Data is not complete');
    
    const user = await User.findByPk(userId);
    if (!user) return next('404,User doesn\'t exist');
    
    const transaction = await Transaction.findByPk(transactionId);
    if (!transaction) return next('404,Transaction doesn\'t exist');

    const bank = await Bank.findByPk(bankId);
    if (!bank) return next('404,Bank doesn\'t exist');

    // Prevent IDOR
    if (transaction.userId !== user.userId) return next('403, You don\'t do this transaction');

    const { bankName } = bank;

    const refund = await Refund.create({
      refundId,
      userId,
      transactionId,
      bankOwner,
      bankAccount,
      bankName,
      isPaid: false,
      isValid: true,
      createdAt: new Date().toISOString(),
      paidAt: null,
      transferImage: null
    })

    const emailData = refundEmail(user,transaction,refund);
    await sendEmail(emailData);

    return res.status(200).json({
      success: true,
      message: 'success create refund',
      results: {
        createdAt,
        refundId,
        userId,
        transactionId,
        bankOwner,
        bankAccount,
        bankName,
        isPaid
      },
    })
  } catch (error) {
    next(error);
  }
}

const getBanks = async (req, res, next) => {  
  try {
    const bank = await Bank.findAll();    

    return res.status(200).json({
      success: true,
      message: 'get all banks',
      results: bank,
    })
  } catch (error) {
    next(error);
  }
}

const getRefundsByUser = async (req, res, next) => {
  const { userId } = req.user;

  try {
    const refund = await Refund.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: db.transaction,
          as: 'transaction'
        }        
      ],
    });
    
    return res.status(200).json({
      success: true,
      message: 'all refund from user grabbed',
      results: refund,
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createRefund,  
  getBanks,
  getRefundsByUser
}