'use strict';

let helper = require('../helper');

module.exports = {
  validateRequest
}

function validateRequest(req,res,next) {
  if(!req.headers['authorization']) res.status(401).json({message: 'Invalid Authorization!'});
  console.log('req.headers.authorization',req.headers.authorization);
  helper.decrypt(req.headers.authorization)
    .then((user) => {
      console.log('user',user);
      req.user = user;
      next();
    })
    .catch((err)=> {
     return res.status(401).json({message: 'Invalid Authorization!',err: err});
    })
}