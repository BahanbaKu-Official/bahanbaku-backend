const db = require('../models');
const DirectPay = db.direct_pay;
const Product = db.product;
const User = db.user;
const cloudStorage = require('../config/cloudstorage.config');
const nanoid = require('../config/nanoid.config');
const directPayBank = require('../config/direct-pay.config');

const createDirectPay = async (req, res, next) => {
  const directPayId = `DRP${nanoid(13)}`;
  const { userId } = req.user;
  const { recipeId } = req.params;
  const { products, addressId } = req.body;
  let total = 0;

  if (!products) return next('400,Product and payment id must not empty');

  try {
    const user = await User.findByPk(userId);
    if (!user) return next('403,User is not valid');    

    const directPay = await DirectPay.create({
      products,
      addressId,
      directPayId,
      userId,
      recipeId,
      status: 'unpaid',            
    });

    if (products.length < 1) return next('403,Product must not be 0');

    for (let i = 0; i < products.length; i++) {
      const product = await Product.findByPk(products[i].id);
      
      if (!product) return next('404,Product not found');
      if (products[i].quantity <= 0) return next('403,Quantity must more than 0');
      if (products[i].quantity > product.stock) return next('403,Quantity must not more than stock');
      directPay.addProduct(product);
    }

    return res.status(200).json({
      success: true,
      message: 'new direct payment created',
      results: directPay,
    })
  } catch (error) {
    next(error);
  }
}

const getBahanbakuBank = async (req, res, next) => {  
  try {    
    
    return res.status(200).json({
      success: true,
      message: 'Get direct payment BahanbaKu account',
      results: directPayBank,
    })
  } catch (error) {
    next(error);
  }
}

const getDirectPayByUser = async (req, res, next) => {
  const { userId } = req.user;

  try {
    const directPay = await DirectPay.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: db.product,
          as: 'products'
        },
        {
          model: db.recipe,
          as: 'recipe',
        }
      ],
    });
    
    return res.status(200).json({
      success: true,
      message: 'all direct payment from user grabbed',
      results: directPay,
    })
  } catch (error) {
    next(error);
  }
}

const uploadPayment = async (req, res, next) => {    
  const { userId } = req.user;
  const { directPayId } = req.params;
  const bucketName = process.env.CLOUD_STORAGE_BUCKET;

  try {
    const user = await User.findByPk(userId);
    if (!user) return next('404,user not listed');

    const directPay = await DirectPay.findByPk(directPayId);
    if (!directPay) return next('404,directPayId not found');

    if (directPay.userId !== user.userId) return next('403,You don\;t own this direct payment');

    const bucket = cloudStorage.bucket(bucketName);    
    console.log(req.file);
    const { originalname, buffer } = req.file;
    const ext = originalname.split('.')[1];    
    const blob = bucket.file(`direct-pay/${directPayId}.${ext}`);
    const blobStream = blob.createWriteStream({
      resumeable: false,
    })

    blobStream
      .on('finish', async () => {
        const paymentLink = `https://storage.googleapis.com/${bucketName}/${blob.name}`;
        
        const updateDirectPay = await DirectPay.update({
          paymentLink,
          status:'waiting for confirmation'
        }, {
          where: {
            directPayId,
          }
        })

        if (!updateDirectPay) return '500,update profile failed';

        return res.status(200).json({
          status: true,
          message: 'success upload direct payment prove',
          results: {
            directPayId
          },
        })
      })
      .end(buffer);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createDirectPay,
  getDirectPayByUser,
  uploadPayment,
  getBahanbakuBank
}