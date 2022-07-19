const express = require('express');
const http = require('http');
const { default: mongoose } = require('mongoose');
const path = require('path');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json())

app.all('*', function (req, res, next) {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Content-Type');
     next();
});

app.use(express.static(__dirname + '/view'));

const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

const productRoutes = require('./routes/productRoutes');
app.use('/product', productRoutes);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect('mongodb+srv://lukeverso:BAIegFhowRk9Qoak@cluster0.oi3mn.mongodb.net/?retryWrites=true&w=majority')
     .then(() => {
          console.log("Conectado ao MongoDB.")
          app.listen(port, () => {
               console.log(`Aplicação funcionando em http://localhost:${port}`);
          })
     })
     .catch((err) => {
          console.log(err);
     });