'use strict';

let routes = require('../routes')

module.exports = class {

  static start() {

    let express = require('express');
    let bodyParser = require('body-parser');
    let morgan = require('morgan');
    let cors = require('cors');
    let mongoose = require('mongoose');

    let app = express();
    app.use(bodyParser());
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.static('uploads'));


      routes.setup(app, express.Router());

    this.connectDb(mongoose)
      .then(()=>{
        this.startHttpServer(app);
      });

  }
  static startHttpServer(app) {
    app.listen(3002, function() {
      console.log(`api server started with 3002 protocol`);
    });
  }
  static connectDb(mongoose){
    return mongoose.connect('mongodb://cart:cart@ds129641.mlab.com:29641/iad-cart')

  }

};
