var express = require('express'),
router = express.Router();
// var itemCtrl = require('./item-controller');
bookCtrl = require('./book-controller')

// router.post('/hello', itemCtrl.postWorld);
// router.get('/hello', itemCtrl.getWorld);
// router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

//books routes
router.get('/', bookCtrl.getBooks);
router.post('/book', bookCtrl.createBook);
router.get('/books', bookCtrl.getBooks);
// router.get('/users/:username', userCtrl.getUserByUsername)       test only
router.get('/book/:id', bookCtrl.getBookById)
router.put('/book/:id', bookCtrl.updateBook);
router.delete('/book/:id', bookCtrl.deleteBook);
router.get('/book', bookCtrl.newBook);
router.get('/edit/:id', bookCtrl.editBook)


//routes for image  (multer)
module.exports.UPLOAD_PATH = "uploads";
var multer = require("multer");
var upload = multer({dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./image-controller.js');
router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);





router.get('/imageform', (req, res) => {
    res.sendFile('./public/imageform.html', { root: __dirname });
});

// app.get('/contact', (req, res) => {
//     res.sendFile('./landing-page/contact.html', { root: __dirname });
// });



module.exports = router;
