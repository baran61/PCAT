const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo')

const app = express();

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//TEMPLATE ENGİNE

app.set('view engine', 'ejs');

//MIDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true})) //url'dekı datayı okumamızı saglıyor
app.use(express.json()) //urldekı datayı json'a donduruyor

//ROUTES
app.get('/', async (req, res) => {
  const photos = await Photo.find({})
  res.render('index',{
    photos
  });
});

// Parametre olarak fotoların tek tek idlerini gönderiyoruz
app.get('/photos/:id', async (req, res) => {  
  //console.log(req.params.id)
  const photo = await Photo.findById(req.params.id)
  res.render('photo', {
    photo
  })
});


app.get('/about', (req, res) => {
  
  res.render('about');
});
app.get('/add', (req, res) => {
  
  res.render('add');
});

app.post('/photos', async(req, res) => {
  
  await Photo.create(req.body)
  res.redirect('/')

});

const port = 3000;
app.listen(3000, () => {
  console.log(`Sunucu ${port} portunda başlatıldı !`);
});
