require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (_, res) => {
  res.json(
    {
      success: true,
      message: 'Welcome to the main endpoint of BahanbaKu'
    }
  );
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
})
