const db = require('../models');
const User = db.user;
const nanoid = require('../config/nanoid.config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: { username },
    });

    if (!user) return next('404,user not listed');

    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) return next('403,wrong password')
    
    const payload = {
      userId: user.userId,
      username: user.username,
      role: user.role,
    }
    const token = jwt.sign(payload, process.env.JWT_TOKEN);
    
    return res.status(200).json({
      success: true,
      message: 'successfully logged in',
      results: token,
    })
  } catch (error) {
    next(error);
  }
}

const register = async (req, res, next) => {
  const userId = nanoid();
  const password = bcrypt.hashSync(req.body.password);

  try {
    const user = await User.create({
      ...req.body,
      userId,
      password,
      passwordChangedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isVerified: 0,
      role: 'user',
      emailVerificationToken: null,
    });

    return res.status(200).json({
      success: true,
      message: 'new user created',
      results: user,
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
}