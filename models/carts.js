'use strict';

module.exports = (mongoose) => {
  return mongoose.model('carts', mongoose.Schema(
    {
      name: String,
      description: String,
      price: String,
      owner : {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
      },
      imageUrl: String
    }
  ));
};

