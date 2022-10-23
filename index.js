const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

//category data
const categories = require('./data/categories.json');
//images:
const brands = require('./data/brands.json');

app.get('/', (req, res) => {
  res.send('news api runnig ');
});

//category respond
app.get('/news-categories', (req, res) => {
  res.send(categories);
});

app.get('/brands', (req, res) => {
  res.send(brands);
});

app.listen(port, () => {
  console.log('news server is running on port ', port);
});
