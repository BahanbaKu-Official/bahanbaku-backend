const db = require('../models');
const cloudStorage = require('../config/cloudstorage.config');
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

module.exports = {
  getUserById,
  uploadPicture
}