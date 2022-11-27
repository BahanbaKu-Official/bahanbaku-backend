const db = require('../models');
const Subscription = db.subscription;

const addSubscription = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return next('400,Email is not defined');

  try {
    const subscription = await Subscription.create({
      emailAddress:email
    });
    
    return res.status(200).json({
      success: true,
      message: 'add subscription',
      results: subscription,
    })
  } catch (error) {
    next(error);
  }
}

const getSubscription = async (_, res, next) => {  

  try {
    const subscription = await Subscription.findAll();
    
    return res.status(200).json({
      success: true,
      message: 'Get all subscription',
      results: subscription,
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addSubscription,
  getSubscription 
}