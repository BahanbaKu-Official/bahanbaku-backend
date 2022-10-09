require('dotenv').config();
const express = require('express');
const cors = require('cors');

const recipeRoutes = require('./src/routes/recipe.route');
const ingredientRoutes = require('./src/routes/ingredient.route');

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

app.use('/recipes', recipeRoutes);
app.use('/ingredients', ingredientRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
})
