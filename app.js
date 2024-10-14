const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');
const fs = require('fs'); //Upload Dosyası olusturmak ıcın
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override'); //edit işlemleri için

const app = express();

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//TEMPLATE ENGİNE

app.set('view engine', 'ejs');

//MIDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //url'dekı datayı okumamızı saglıyor
app.use(express.json()); //urldekı datayı json'a donduruyor
app.use(fileUpload()); //Fotograf yuklemek ıcın
app.use(methodOverride('_method')); //Edit

//ROUTES
app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index', {
    photos,
  });
});

// Parametre olarak fotoların tek tek idlerini gönderiyoruz
app.get('/photos/:id', async (req, res) => {
  //console.log(req.params.id)
  const photo = await Photo.findById(req.params.id);
  res.render('photo', {
    photo,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photos', async (req, res) => {
  const __dirname = path.resolve(); // Dinamik olarak dizin yolunu oluşturur
  const uploadDir = path.join(__dirname, '/public/uploads'); // upload klasörünün tam yolu

  // 'uploads' klasörü yoksa oluşturulur
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true }); // recursive:true ile alt dizinleri de oluşturur
  }

  let uploadedImage = req.files.image; // Yüklenen görsel
  let uploadPath = path.join(uploadDir, uploadedImage.name); // Görselin gideceği tam yol

  // Görselin belirtilen yola taşınması
  uploadedImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    });
    res.redirect('/');
  });
});

app.get('/photos/edit/:id', async (req, res) => {
  //Parametre olarak :id yi gönderiyoruz
  const photo = await Photo.findOne({ _id: req.params.id }); //Fotografı guncelleme
  res.render('edit', {
    photo,
  });
});

app.put('/photos/:id', async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id }); //Fotografı guncelleme
  photo.title = req.body.title; // Title güncelleme
  photo.description = req.body.description; // Açıklama güncelleme
  photo.save();

  res.redirect(`/photos/${req.params.id}`)
});

const port = 3000;
app.listen(3000, () => {
  console.log(`Sunucu ${port} portunda başlatıldı !`);
});
