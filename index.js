require('dotenv').config();
const express = require('express');
const cors = require('cors');

const recipeRoutes = require('./src/routes/recipe.route');
const ingredientRoutes = require('./src/routes/ingredient.route');
const tagRoutes = require('./src/routes/tag.route');
const authRoutes = require('./src/routes/auth.route');

const errorHandler = require('./src/utils/errorHandler');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (_, res) => {
  res.json(
    {
      success: true,
      message: 'Welcome to the main endpoint of BahanbaKu'
    }
  );
});

app.use('/', authRoutes);
app.use('/recipes', recipeRoutes);
app.use('/ingredients', ingredientRoutes);
app.use('/tags', tagRoutes);

app.use(errorHandler)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
})
