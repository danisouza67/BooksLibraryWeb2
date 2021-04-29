var express = require('express'),
router = express.Router();
var itemCtrl = require('./item-controller');
userCtrl = require('./user-controller')

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

//posts..
router.post('/hello', itemCtrl.postWorld);
router.post('/users', userCtrl.createUser);

//gets..
router.get('/users', userCtrl.getUsers);
// router.get('/users/:username', userCtrl.getUserByUsername)
router.get('/users/id/:id', userCtrl.getUserById)

//puts..
router.put('/users/:id', userCtrl.updateUser);

//deletes..
router.delete('/users/:id', userCtrl.deleteUser);


//route for image  (multer)
module.exports.UPLOAD_PATH = "uploads";
var multer = require("multer");
var upload = multer({dest: module.exports.UPLOAD_PATH})
var imageCtrl = require('./image-controller.js')

module.exports = router;
