require('dotenv').config();
const express = require('express');
const cors = require('cors');

const recipeRoutes = require('./src/routes/recipe.route');
const ingredientRoutes = require('./src/routes/ingredient.route');
const tagRoutes = require('./src/routes/tag.route');
const authRoutes = require('./src/routes/auth.route');
const reviewRoutes = require('./src/routes/review.route');
const productRoutes = require('./src/routes/product.route');
const transactionRoutes = require('./src/routes/transaction.route');
const stepRoutes = require('./src/routes/step.route');
const userRoutes = require('./src/routes/user.route');
const favoriteRoutes = require('./src/routes/favorite.route');

const errorHandler = require('./src/utils/errorHandler');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

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
app.use('/review', reviewRoutes);
app.use('/admin/products', productRoutes);
app.use('/transaction', transactionRoutes);
app.use('/step', stepRoutes);
app.use('/users', userRoutes);
app.use('/favorites', favoriteRoutes);

app.use(errorHandler)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
})
