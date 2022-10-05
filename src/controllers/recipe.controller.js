const db = require('../models');
const Recipe = db.recipe;
const nanoid = require('../config/nanoid.config');

const getRecipes = async (_, res, next) => {
  try {
    const recipes = await Recipe.findAll();
    
    return res.status(200).json({
      success: true,
      message: 'all recipes grabbed',
      results: recipes,
    })
  } catch (error) {
    next(error);
  }
}

const createRecipe = async (req, res, next) => {
  const recipeId = nanoid();

  try {
    const recipe = await Recipe.create({
      ...req.body,
      recipeId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'new recipe created',
      results: recipe,
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getRecipes,
  createRecipe,
}