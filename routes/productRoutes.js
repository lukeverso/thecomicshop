const router = require('express').Router();
const Product = require('../model/Product');

router.post('/', async (req, res) => {
     const { nome, descricao, estado, valor, categoria, formato, ano_publicacao, imagem } = req.body;
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
     if (!estado) {
          res.status(422).json({
               error: 'O estado do produto é obrigatório.'
          });
          return;
     };
     if (!valor) {
          res.status(422).json({
               error: 'O valor do produto é obrigatório.'
          });
          return;
     };
     if (!categoria) {
          res.status(422).json({
               error: 'A categoria do produto é obrigatória.'
          });
          return;
     };
     if (!formato) {
          res.status(422).json({
               error: 'O formato do produto é obrigatório.'
          });
          return;
     };
     if (!ano_publicacao) {
          res.status(422).json({
               error: 'O ano de publicação do produto é obrigatório.'
          });
          return;
     };
     // if (!imagem) {
     //      res.status(422).json({
     //           error: 'A imagem do produto é obrigatória.'
     //      });
     //      return;
     // };
     const product = {
          nome,
          descricao,
          estado,
          valor,
          categoria,
          formato,
          ano_publicacao,
          // imagem
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
          const product = await Product.deleteOne({
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