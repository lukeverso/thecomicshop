const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
     nome: String,
     descricao: String,
     valor: Number,
     
     criado: {
          type: Date,
          default: Date.now()
     }
});

module.exports = Product;