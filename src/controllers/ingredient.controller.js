const db = require('../models');
const Ingredient = db.ingredient;
const nanoid = require('../config/nanoid.config');

const getIngredients = async (_, res, next) => {
  try {
    const ingredients = await Ingredient.findAll();
    
    return res.status(200).json({
      success: true,
      message: 'all ingredients grabbed',
      results: ingredients,
    })
  } catch (error) {
    next(error);
  }
}

const createIngredient = async (req, res, next) => {
  const ingredientId = `ING${nanoid(13)}`;

  try {
    const recipe = await Ingredient.create({
      ...req.body,
      ingredientId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'new ingredient created',
      results: recipe,
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getIngredients,
  createIngredient,
}