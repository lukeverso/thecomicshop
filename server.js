const express = require('express');
const http = require('http');
const { default: mongoose } = require('mongoose');
const path = require('path');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(express.json())

app.all('*', function (req, res, next) {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Content-Type');
     next();
});

app.use(express.static(__dirname + '/view'));

const userRoutes = require('./controller/userRoutes');
app.use('/user', userRoutes);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@lukebase.oi3mn.mongodb.net/?retryWrites=true&w=majority`)
     .then(() => {
          console.log("Conectado ao MongoDB.")
          app.listen(port);
     })
     .catch((err) => {
          console.log(err);
     });