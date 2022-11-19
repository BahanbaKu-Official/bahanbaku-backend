const db = require('../models');
const Review = db.review;
const Recipe = db.recipe;
const nanoid = require('../config/nanoid.config');

const createReview = async (req, res, next) => {
  const reviewId = `REV${nanoid(13)}`;
  const { recipeId } = req.params;
  const { userId } = req.user;

  try {
    const review = await Review.create({
      ...req.body,
      reviewId,
      review: req.body.review,
      userId,
      recipeId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    const sumReview = await Review.sum('rating', {
      where: {
        recipeId,
      }
    });
    const countReview = await Review.count('rating', {
      where: {
        recipeId,
      }
    });
    await Recipe.update({
      rating: sumReview/countReview,
    }, {
      where: {
        recipeId,
      }
    })

    return res.status(200).json({
      success: true,
      message: 'new review created',
      results: review,
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createReview,
}