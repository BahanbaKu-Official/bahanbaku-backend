const db = require('../models');
const Product = db.product;
const nanoid = require('../config/nanoid.config');

const getProducts = async (_, res, next) => {
  try {
    const products = await Product.findAll();
    
    return res.status(200).json({
      success: true,
      message: 'all products grabbed',
      results: products,
    })
  } catch (error) {
    next(error);
  }
}

const createProduct = async (req, res, next) => {
  const productId = `PRO${nanoid()}`;

  try {
    const product = await Product.create({
      ...req.body,
      productId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'new product created',
      results: product,
    })
  } catch (error) {
    next(error);
  }
}

const getProductByName = async (req, res, next) => {
  const { name } = req.query;

  try {
    const product = await Product.findAll({
      where: {
        name: db.sequelize.where(db.sequelize.fn('LOWER', db.sequelize.col('name')), 'LIKE', `%${name}%`),
      }
    })

    return res.status(200).json({
      success: true,
      message: 'one product grabbed by name',
      results: product,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getProducts,
  createProduct,
  getProductByName,
}