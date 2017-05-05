'use strict';

let mongoose = require('mongoose');

module.exports = {
  users: require('./users')(mongoose),
  carts : require('./carts')(mongoose)
}