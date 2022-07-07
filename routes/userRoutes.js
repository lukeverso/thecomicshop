const router = require('express').Router();
const User = require('../model/User');

router.post('/', async (req, res) => {
     const { nome, usuario, senha, email, telefone } = req.body;
     if (!nome) {
          res.status(422).json({
               error: 'O nome é obrigatório.'
          });
          return;
     };
     if (!usuario) {
          res.status(422).json({
               error: 'O usuário é obrigatório.'
          });
          return;
     };
     if (!senha) {
          res.status(422).json({
               error: 'A senha é obrigatória.'
          });
          return;
     };
     if (!email) {
          res.status(422).json({
               error: 'O e-mail é obrigatório.'
          });
          return;
     };
     if (!telefone) {
          res.status(422).json({
               error: 'O telefone é obrigatório.'
          });
          return;
     };
     const user = {
          nome,
          usuario,
          senha,
          email,
          telefone
     };
     try {
          // Criando os dados...
          await User.create(user);
          res.status(201).json({
               message: 'Usuário criado com sucesso.'
          })
     } catch (error) {
          res.status(500).json({
               error: error
          })
     };
});

router.get('/', async (req, res) => {
     try {
          const user = await User.find();
          res.status(200).json(user);
     } catch (error) {
          res.status(500).json({
               error: error
          })
     }
});

router.get('/:id', async (req, res) => {
     const id = req.params.id;
     try {
          const user = await User.findOne({
               _id: id
          });
          if (!user) {
               res.status(422).json({
                    message: 'Usuário não encontrado.'
               });
               return;
          }
          res.status(200).json(user);
     } catch (error) {
          res.status(500).json({
               error: error
          })
     }
})

router.patch('/:id', async (req, res) => {
     const id = req.params.id;
     const { nome, usuario, senha, email, telefone } = req.body;
     const user = {
          nome,
          usuario,
          senha,
          email,
          telefone
     };
     try {
          const dadosAtualizados = await User.updateOne({
               _id: id
          }, user);
          if (dadosAtualizados.matchedCount === 0) {
               res.status(424).json({
                    message: 'Usuário não encontrado.'
               });
               return;
          }
          res.status(200).json(user);
     } catch (error) {
          res.status(500).json({
               error: error
          })
     }
});

module.exports = router;