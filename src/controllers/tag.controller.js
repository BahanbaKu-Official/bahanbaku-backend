const db = require('../models');
const Tag = db.tag;
const nanoid = require('../config/nanoid.config');

const getTags = async (_, res, next) => {
  try {
    const tags = await Tag.findAll();
    
    return res.status(200).json({
      success: true,
      message: 'all tags grabbed',
      results: tags,
    })
  } catch (error) {
    next(error);
  }
}

const createTag = async (req, res, next) => {
  const tagId = nanoid();

  try {
    const tag = await Tag.create({
      ...req.body,
      tagId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'new tag created',
      results: tag,
    })
  } catch (error) {
    next(error);
  }
}

const getTagByName = async (req, res, next) => {
  const { tag } = req.query;

  try {
    const tags = await Tag.findOne({
      where: {
        tag,
      },
      include: 'recipes'
    });
    
    return res.status(200).json({
      success: true,
      message: 'one tag grabbed',
      results: tags,
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getTags,
  createTag,
  getTagByName,
}