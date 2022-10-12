const db = require('../models');
const Recipe = db.recipe;
const Tag = db.tag;
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

const getRecipeById = async (req, res, next) => {
  const { recipeId } = req.params;

  try {
    const recipe = await Recipe.findByPk(recipeId, {
      include: [
        {
          model: db.ingredient,
          as: 'ingredients'
        },
        {
          model: db.review,
          as: 'reviews',
          include: [
            {
              model: db.user,
              as: 'user'
            }
          ]
        },
        {
          model: db.tag,
          as: 'tags'
        },
      ],
    });
    
    return res.status(200).json({
      success: true,
      message: 'one recipe grabbed',
      results: recipe,
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

const addTag = async (req, res, next) => {
  const { recipeId } = req.params;
  const { tagId } = req.query;

  try {
    const recipe = await Recipe.findByPk(recipeId);
    const tag = await Tag.findByPk(tagId);

    tag.addRecipe(recipe);

    return res.status(200).json({
      success: true,
      message: 'recipe added to tag',
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  addTag,
}