const mongoose = require('mongoose');

const User = mongoose.model('User', {
     nome: {
          type: String,
          required: true
     },
     usuario: {
          type: String,
          required: true,
          unique: true
     },
     senha: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true,
          unique: true
     },
     telefone: {
          type: Number,
          required: true,
          unique: true
     },
});

module.exports = User;