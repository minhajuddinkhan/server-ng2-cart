'use strict';

let controllers = require('../controllers');
module.exports = class {

  static setup(router) {

    router.post('/auth/login', controllers.auth.login);
    router.post('/auth/signup', controllers.auth.signup);

  }
};
