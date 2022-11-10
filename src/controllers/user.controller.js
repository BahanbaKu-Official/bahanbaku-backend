const db = require('../models');
const User = db.user;

const getUserById = async (req, res, next) => {
  const { userId } = req.user;

  try {
    const user = await User.findByPk(userId);
    
    return res.status(200).json({
      success: true,
      message: 'one user grabbed',
      results: user,
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUserById,
}