const db = require('../models');
const User = db.user;
const nanoid = require('../config/nanoid.config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const emailVerificationHandler = require('../utils/email/generateVerificationEmail');
const sendEmail = require('../utils/email/sendEmail');

const login = async (req, res, next) => {
  const {
    email,
    password
  } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email
      },
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
  const userId = `USR${nanoid(13)}`;
  const password = bcrypt.hashSync(req.body.password);
  const {
    firstName,
    lastName,
    phoneNumber,
    email
  } = req.body;
  const emailToken = `${nanoid()}-${nanoid()}`;

  try {
    const checkExist = await User.findOne({
      where: {
        email
      }
    })

    if (checkExist) return next('403,User already exist');

    const user = await User.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      userId,
      password,
      passwordChangedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isVerified: 0,
      role: 'user',
      profileImage: 'https://storage.googleapis.com/bahanbaku-assets/user/blank-profile-picture.png',
      emailVerificationToken: emailToken,
      forgotPasswordToken: null,
      forgotPasswordCreatedAt: null
    });

    const verificationEmail = emailVerificationHandler(email, emailToken);
    await sendEmail(verificationEmail);

    return res.status(200).json({
      success: true,
      message: 'new user created',
      results: {
        firstName,
        lastName,
        email,
        phoneNumber,
        userId
      },
    })
  } catch (error) {
    next(error);
  }
}

const verify = async (req, res, next) => {
  const {
    token
  } = req.query;

  if (!token) return next('400,token not found');

  try {

    const user = await User.findOne({
      where: {
        emailVerificationToken: token,
      }
    })

    if (!user) return next('403,token is invalid');

    isVerified = 1;
    const updateUser = await User.update({
      isVerified,
    }, {
      where: {
        emailVerificationToken: token,
      }
    })

    return res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  } catch (error) {
    next(error);
  }
}

const forgotPasswordRequest = async (req, res, next) => {
  const {
    email
  } = req.body;
  if (!email) return next('400,email not found');

  const forgotPasswordToken = `${nanoid(16)}-${nanoid(16)}`;

  try {
    await User.update({
      forgotPasswordToken,
      forgotPasswordCreatedAt: new Date().toISOString()
    },{
      where: {
        email
      },
    })    
    
    return res.status(200).json({
      success: true,
      message: 'Reset password has been sent ! Please check your email',
    })
  } catch (error) {
    next(error);
  }
}

const forgotPasswordVerify = async (req, res, next) => {
  const {
    token
  } = req.query;

  const { newPassword } = req.body;

  if (!token) return next('404,token not found');
  if (!newPassword) return next('404,new password not found');
  
  try {
    const user = await User.findOne({
      where: {
        forgotPasswordToken: token
      },
    })    
    
    if (!user) return next('403,Token not valid');

    const isExpired = (Math.abs(new Date() - user.forgotPasswordCreatedAt) / 1000 / 60) >= 15;
    if (isExpired) return next('403,Token is expired. Please request password reset again');
    
    await User.update({
      password: bcrypt.hashSync(newPassword),
      passwordChangedAt: new Date().toISOString()
    },{
      where: {
        forgotPasswordToken: token
      },
    })

    return res.status(200).json({
      success: true,
      message: 'Reset password success. Please login again',
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
  verify,
  forgotPasswordRequest
}