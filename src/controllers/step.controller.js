const db = require('../models');
const Step = db.step;
const nanoid = require('../config/nanoid.config');

const getSteps = async (_, res, next) => {
  try {
    const steps = await Step.findAll();
    
    return res.status(200).json({
      success: true,
      message: 'all steps grabbed',
      results: steps,
    })
  } catch (error) {
    next(error);
  }
}

const createStep = async (req, res, next) => {
  const stepId = `STP${nanoid(13)}`;
  const { recipeId } = req.params;

  try {
    const step = await Step.create({
      ...req.body,
      stepId,
      recipeId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'new tag created',
      results: step,
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getSteps,
  createStep,
}