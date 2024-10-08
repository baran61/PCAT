const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

//TEMPLATE ENGİNE

app.set('view engine', 'ejs');

//MIDLEWARES
app.use(express.static('public'));

//ROUTES
app.get('/', (req, res) => {
  
  res.render('index');
});
app.get('/about', (req, res) => {
  
  res.render('about');
});
app.get('/add', (req, res) => {
  
  res.render('add');
});

const port = 3000;
app.listen(3000, () => {
  console.log(`Sunucu ${port} portunda başlatıldı !`);
});
