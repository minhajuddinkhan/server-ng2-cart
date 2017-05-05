'use strict';

let repos = require('../repos');

module.exports = {
  create,
  getAll
};

function create(req,res) {

  let cart = JSON.parse(req.body.cart);

  let payload = {
    name: cart.name,
    description: cart.description,
    price: cart.price,
    owner: req.user_id,
    imageUrl: req.imageUrl
  };
  repos.carts.create(payload)
    .then((cart) => {
      res.status(200).json(cart);
    })
    .catch((err) => res.status(500).json(err));
}

function getAll(req,res) {

    repos.carts.find({})
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => res.status(500).json(err));

}