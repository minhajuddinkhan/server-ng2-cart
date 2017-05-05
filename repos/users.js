'use strict';


let { users } = require('../models')
module.exports = {
  findOne,
  create
}

function findOne(query) {
  return new Promise((resolve,reject) => {

    users.findOne(query,function (err,user) {
      if(err) {
        console.log('here in err',err);
        reject(err);
      }
      else resolve(user);

    })
  })
}

function create(user) {
  return new Promise((resolve,reject) => {
    users.create(user,function (err,data) {
      if(err) reject(err);
      else resolve(data);
    });
  })
}
