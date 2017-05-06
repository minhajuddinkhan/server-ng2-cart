'use strict';

let repos = require('../repos');

module.exports = {
    create,
    getAll,
    remove
};

function create(req,res) {
    let cart;
    try {
        cart = JSON.parse(req.body.cart);
    }
    catch (ex){
      return res.json(500).json({message: 'Invalid input'});
    }

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
        .then((carts) => {
            res.status(200).json(carts);
        })
        .catch((err) => res.status(500).json(err));

}

function remove(req, res) {
  let query = {
    _id : req.params.id
  };

  repos.carts.remove(query)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => res.status(500).json(err))
}