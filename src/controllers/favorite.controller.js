const db = require('../models');
const User = db.user;
const Recipe = db.recipe;
const jwt = require('jsonwebtoken');

const getFavorites = async (req, res, next) => {
  const { userId } = req.user;

  try {
    const favorite = await User.findByPk(userId, {
      attributes:['userId'],
      include: [
        {
          model: db.recipe,
          as: 'favorite'                  
        },
      ],
    });
    
    return res.status(200).json({
      success: true,
      message: 'All favorite grabbed',
      results: favorite,
    })
  } catch (error) {
    next(error);
  }
}

const addFavorite = async (req, res, next) => {
  const { recipeId } = req.params;
  const { userId } = req.user;

  try {
    const recipe = await Recipe.findByPk(recipeId);
    const user = await User.findByPk(userId);

    if (!recipe) return next('404,Recipe not found');
    if (!user) return next('500,error in user data');
    if (await user.hasFavorite(recipe)) return next('403,duplicate favorite');

    await user.addFavorite(recipe);

    return res.status(200).json({
      success: true,
      message: 'recipe added to favorite',
    })
  } catch (error) {
    next(error);
  }
}

const deleteFavorite = async (req, res, next) => {
  const { recipeId } = req.params;
  const { userId } = req.user;

  try {
    const recipe = await Recipe.findByPk(recipeId);
    const user = await User.findByPk(userId);

    if (!recipe) return next('404,Recipe not found');
    if (!user) return next('500,Error in user data');
    if (!await user.hasFavorite(recipe)) return next('403,The recipe is not in favorite list');

    await user.removeFavorite(recipe);

    return res.status(200).json({
      success: true,
      message: 'recipe deleted from favorite',
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getFavorites,
  addFavorite,
  deleteFavorite
}