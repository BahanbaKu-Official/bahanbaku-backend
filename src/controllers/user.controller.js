const db = require('../models');
const cloudStorage = require('../config/cloudstorage.config');
const { nanoid } = require('nanoid');
const User = db.user;
const Address = db.address;

const getUserById = async (req, res, next) => {
  const { userId } = req.user;

  try {
    const user = await User.findByPk(userId,{
      attributes:['userId','firstName','lastName','phoneNumber','email','createdAt','updatedAt','isVerified','profileImage']
    });

    if (!user) return next('404,User doesn\'t exist');
    
    return res.status(200).json({
      success: true,
      message: 'one user grabbed',
      results: user,
    })
  } catch (error) {
    next(error);
  }
}

const uploadPicture = async (req, res, next) => {    
  const { userId } = req.user;
  const bucketName = process.env.CLOUD_STORAGE_BUCKET;

  try {
    const user = await User.findByPk(userId);
    
    if (!user) return next('404,user not listed');
    
    const bucket = cloudStorage.bucket(bucketName);    
    const { originalname, buffer } = req.file;
    const ext = originalname.split('.')[1];    
    const blob = bucket.file(`user/${userId}.${ext}`);
    const blobStream = blob.createWriteStream({
      resumeable: false,
    })

    blobStream
      .on('finish', async () => {
        const profileImage = `https://storage.googleapis.com/${bucketName}/${blob.name}`;
        
        const updateUser = await User.update({
          profileImage,
        }, {
          where: {
            userId,
          }
        })

        if (!updateUser) return '500,update profile failed';

        return res.status(200).json({
          status: true,
          message: 'success update user profile picture',
          results: {
            userId
          },
        })
      })
      .end(buffer);
  } catch (error) {
    next(error);
  }
}

const updateProfile = async (req, res, next) => {  
  const { userId } = req.user;
  const { firstName, lastName, phoneNumber } = req.body;  

  try {      
    const user = await User.update({
      firstName,
      lastName,
      phoneNumber,
      updatedAt: new Date().toISOString()
    }, {
      where: {
        userId,
      }
    })

    if (!user) return next('500, Error when update user');

    return res.status(200).json({
      success: true,
      message: 'user profile updated',      
    })
  } catch (error) {
    next(error);
  }
}

const createAddress = async (req, res, next) => {  
  const { userId } = req.user;
  const { longitude, latitude, street, district, city, province, zipCode, label, receiverName, receiverPhoneNumber } = req.body;  

  try {      
    const user = await User.findByPk(userId);    
    if (!user) return next('404,User not found');

    const addressId = `ADR${nanoid(13)}`;

    const address = await Address.create({
      addressId,
      userId,
      longitude,
      latitude,
      street,
      district,
      city,
      province,
      zipCode,
      label,
      receiverName,
      receiverPhoneNumber
    })

    return res.status(200).json({
      success: true,
      message: 'new address created',
      results: address    
    })
  } catch (error) {
    next(error);
  }
}

const getAddressByUser = async (req, res, next) => {  
  const { userId } = req.user;  

  try {      
    const user = await User.findByPk(userId);    
    if (!user) return next('404,User not found');
    
    const address = await Address.findAll({
      where:{        
        userId
      }
    })    

    return res.status(200).json({
      success: true,
      message: 'get address by user',
      results: address    
    })
  } catch (error) {
    next(error);
  }
}

const getAddressById = async (req, res, next) => {  
  const { userId } = req.user;
  const { addressId } = req.params;
    
  try {      
    const user = await User.findByPk(userId);    
    if (!user) return next('404,User not found');
    
    const address = await Address.findOne({
      where:{
        addressId,
        userId
      }
    })

    if (!address) return next('404,Address not found');

    return res.status(200).json({
      success: true,
      message: 'get address by id',
      results: address    
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUserById,
  uploadPicture,
  updateProfile,
  createAddress,
  getAddressByUser,
  getAddressById
}