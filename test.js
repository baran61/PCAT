const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB

mongoose.connect('mongodb://localhost/pcat-test-db');

// Create Schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

//create new model
const Photo = mongoose.model('Photo', PhotoSchema);

//create a Photo

/*

Photo.create({
    title: 'Photo title 1',
    description: 'Photo description 1 lorem ipsum',
  })
    .then((data) => {
      console.log("The newly added Photo:", data);
    })
    .catch((err) => {
      console.log("There was an error!", err);
    });
    
*/

// Read all photos using then/catch
Photo.find({})
  .then((data) => {
    console.log('Photos: ', data);
  })
  .catch((err) => {
    console.log('The Error was found !', err);
  });

/*

// Update Photo
const id = "6707f2b5c5bee86e1e2c5d0f";

Photo.findByIdAndUpdate(
  id,
  {
    title: "Photo 1 Title updated",
    description: "Photo 1 description updated !"
  },
  { new: true } // Bu seçenek, güncellenmiş dokümanı döndürür.
)
  .then(updatedPhoto => {
    console.log('Updated Photo:', updatedPhoto);
  })
  .catch(err => {
    console.log('Error updating photo:', err);
  });

  */
/*

  //Deleting Data
  const id = "6707f2b5c5bee86e1e2c5d0f";

  Photo.findByIdAndDelete(id)
    .then(() => {
      console.log("Photo is removed!");
    })
    .catch(err => {
      console.log("Error deleting photo:", err);
    });

*/
