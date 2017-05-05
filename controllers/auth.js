'use strict';

let helper = require('../helper');
let repos = require('../repos');

module.exports = {
  signup,
  login
};

function signup(req,res) {

  let payload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };


  repos.users.create(payload)
    .then((data) => {
      if(data){
        helper.encrypt(JSON.stringify(
          {
            username: payload.username,
            password: payload.password
          }
        )).then((crypted)=>{
          res.status(200).json({token: crypted});
        })
      }
    }).catch((err) => res.status(500).json(err));


}

function login(req,res) {
  let query = {
    username: req.body.username
  };
  repos.users.findOne(query)
    .then((user) => {

      console.log('user',user);
      if(!user)  {
        console.log('here in no user');
        return res.status(404).json({message: 'User not found'});

      }else return validatePassword(user)
    })
    .then((user) => {
      helper.encrypt(JSON.stringify(
        {
          _id: user._id,
          password: user.password
        }
      )).then((crypted)=>{
        res.status(200).json({token: crypted});
      })
    })
    .catch((err) => {
      res.status(500).json(err);
    });


  function validatePassword(user) {
    return new Promise((resolve,reject) => {
      if(user.password == req.body.password){
        resolve(user);
      }else{
        reject({message: 'Invalid password'});
      }
    })
  }
}