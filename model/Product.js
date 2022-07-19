const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
     nome: {
          type: String,
          required: true
     },
     descricao: {
          type: String,
          required: true
     },
     valor: {
          type: Number,
          required: true
     },
     id_vendedor: {
          type: String,
          required: true
     },
     vendedor: {
          type: String,
          required: true
     },
     criado: {
          type: Date,
          default: Date.now()
     },
     vendido: {
          type: Boolean,
          default: false
     },
     vendidoPara: {
          type: String,
          default: ''
     }
});

module.exports = Product;