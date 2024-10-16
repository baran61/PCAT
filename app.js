const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');
const fs = require('fs'); //Upload Dosyası olusturmak ıcın
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override'); //edit işlemleri için
const photoController = require('./controllers/photoControlers')

const app = express();

// connect DB
//mongoose.connect('mongodb://localhost/pcat-test-db');
mongoose.connect('mongodb+srv://azakbaran:baran123@cluster0.u04jp.mongodb.net/')
.then(() => {
  console.log('DB connected !')
}).catch((err) => {
  console.log(err)
})

//TEMPLATE ENGİNE

app.set('view engine', 'ejs');

//MIDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //url'dekı datayı okumamızı saglıyor
app.use(express.json()); //urldekı datayı json'a donduruyor
app.use(fileUpload()); //Fotograf yuklemek ıcın
app.use(methodOverride('_method')); //Edit

//ROUTES
app.get('/', photoController.getAllPhotos );  //Bütün Fotoğrafların gösterilmesi
app.post('/photos', photoController.createPhoto); //Fotoğraf oluşturmak
app.get('/photos/edit/:id', photoController.photoEdit); //Fotoğrafların editlenmesi
app.get('/photos/:id', photoController.getPhoto); // Parametre olarak fotoların tek tek idlerini gönderiyoruz


app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});


app.put('/photos/:id', async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id }); //Fotografı guncelleme
  photo.title = req.body.title; // Title güncelleme
  photo.description = req.body.description; // Açıklama güncelleme
  photo.save();

  res.redirect(`/photos/${req.params.id}`)
});

//const port = 3000;
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı !`);
});
