'use strict';

module.exports = class {

  static setup(app, router) {

    // **** Auth Routes ******* //
    require('./auth').setup(router);


    app.use(router);

  }
}