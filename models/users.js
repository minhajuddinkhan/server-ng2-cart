'use strict';

module.exports = (mongoose) => {
  return mongoose.model('user', mongoose.Schema(
    {
      firstName: String,
      lastName: String,
      username: String,
      password: String,
      email: String
    }
  ));
};

