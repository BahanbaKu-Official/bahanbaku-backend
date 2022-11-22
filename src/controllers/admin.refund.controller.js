const db = require('../models');
const Bank = db.bank;
const User = db.user;
const Refund = db.refund;

const addBank = async (req, res, next) => {
  const {
    userId
  } = req.user;
  const {
    bankName
  } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) return next('403,User doesn\'t exist');

    const bank = await Bank.create({
      bankName
    });

    return res.status(200).json({
      success: true,
      message: 'Success add new bank',
      results: bank,
    })
  } catch (error) {
    next(error);
  }
}

const getAllRefund = async (req, res, next) => {
  const {userId} = req.user;

  try {
    const refund = await Refund.findAll({      
      include: [{
        model: db.user,
        as: 'user'
      },{
        model: db.transaction,
        as: 'transaction'
      },],
    });

    return res.status(200).json({
      success: true,
      message: 'All refunds grabbed',
      results: refund,
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addBank,
  getAllRefund
}