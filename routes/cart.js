'use strict';

let controllers = require('../controllers');
let middlewares = require('../middelwares');

let multer  = require('multer')
let crypto = require('crypto');
let path = require('path')
let storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)
      req.imageUrl = raw.toString('hex') + path.extname(file.originalname);
      cb(null,  req.imageUrl)
    })
  }
})

let upload = multer({ storage: storage })

module.exports = class {

  static setup(router) {

   router.post('/cart',middlewares.auth.validateRequest, upload.single('imageFile'),controllers.cart.create)
   router.get('/cart', middlewares.auth.validateRequest, controllers.cart.getAll)
  }
};
