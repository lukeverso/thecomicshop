const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
     nome: String,
     descricao: String,
     estado: {
          type: String,
          enum: ['novo', 'usado'],
          default: 'usado'
     },
     valor: Number,
     categoria: {
          type: String,
          enum: ['Marvel', 'DC', 'Vertigo', 'Image', 'Bonelli', 'Disney', 'Turma da Mônica', 'Importado', 'Outros'],
          default: 'Outros'
     },
     formato: {
          type: String,
          enum: ['Mensal', 'Encadernado', 'Capa dura', 'Omnibus'],
          default: 'Mensal'
     },
     ano_publicacao: Number,
});

module.exports = Product;