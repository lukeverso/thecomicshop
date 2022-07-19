const mongoose = require('mongoose');

const User = mongoose.model('User', {
     usuario: {
          type: String,
          required: true,
          unique: true
     },
     senha: {
          type: String,
          required: true
     },
});

module.exports = User;