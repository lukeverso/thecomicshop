const router = require('express').Router();
const Product = require('../model/Product');

router.post('/', async (req, res) => {
     const { nome, descricao, valor, id_vendedor, vendedor } = req.body;
     if (!nome) {
          res.status(422).json({
               error: 'O nome do produto é obrigatório.'
          });
          return;
     };
     if (!descricao) {
          res.status(422).json({
               error: 'A descrição do produto é obrigatória.'
          });
          return;
     };
     if (!valor) {
          res.status(422).json({
               error: 'O valor do produto é obrigatório.'
          });
          return;
     };
     if (!id_vendedor || !vendedor) {
          res.status(422).json({
               error: 'Impossível criar um produto sem uma conta.'
          });
          return;
     };
     const product = {
          nome,
          descricao,
          valor,
          id_vendedor,
          vendedor
     };
     try {
          // Criando os dados...
          await Product.create(product);
          res.status(201).json({
               message: 'Produto criado com sucesso.'
          })
     } catch (error) {
          res.status(500).json({
               error: error
          })
     };
});

router.get('/', async (req, res) => {
     try {
          const product = await Product.find();
          res.status(200).json(product);
     } catch (error) {
          res.status(500).json({
               error: error
          })
     }
});

router.get('/:id', async (req, res) => {
     const id = req.params.id;
     try {
          const product = await Product.findOne({
               _id: id
          });
          if (!product) {
               res.status(422).json({
                    message: 'Produto não encontrado.'
               });
               return;
          }
          res.status(200).json(product);
     } catch (error) {
          res.status(500).json({
               error: error
          })
     }
});

router.delete('/:id', async (req, res) => {
     const id = req.params.id;
     try {
          const product = await Product.findByIdAndDelete({
               _id: id
          });
          if (!product) {
               res.status(422).json({
                    message: 'Produto não encontrado.'
               });
               return;
          }
          res.status(200).json(product);
     } catch (error) {
          res.status(500).json({
               error: error
          })
     }
});

module.exports = router;