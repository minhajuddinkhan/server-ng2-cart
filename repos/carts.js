'use strict';

let { carts } = require('../models')

module.exports = {

  findOne,
  create,
  find
}

function create(payload) {

  return carts.create(payload, (err,cart) =>{
    console.log('err',err);
    console.log('cart',cart);
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