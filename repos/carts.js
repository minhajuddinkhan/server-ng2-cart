'use strict';

let { carts } = require('../models')

module.exports = {

  findOne,
  create,
  find
}

function create(payload) {

  return carts.create(payload, (err,cart) =>{
    if(err) Promise.reject(err);
    else Promise.resolve(cart);
  })
}

function findOne() {

}

function find(query) {
  return carts.find(query,(err,carts) => {
    if(err) Promise.reject(err);
    else Promise.resolve(carts)
  })
}