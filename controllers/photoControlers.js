const Photo = require('../models/Photo')

exports.getAllPhotos = async (req, res) => {
  const photos = await Photo.find({}).sort('-dateCreated');
  res.render('index', {
    photos,
  });
};

exports.getPhoto = async (req, res) => {
  //console.log(req.params.id)
  const photo = await Photo.findById(req.params.id);
  res.render('photo', {
    photo,
  });
};

exports.createPhoto = async (req, res) => {
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
  }

  exports.photoEdit = async (req, res) => {
    //Parametre olarak :id yi gönderiyoruz
    const photo = await Photo.findOne({ _id: req.params.id }); //Fotografı guncelleme
    res.render('edit', {
      photo,
    });
  }

  