const express = require('express');
const SessionController = require('./controllers/SessionController');
const routes = express.Router(); //Roteador do express

routes.post('/sessions', SessionController.store); //store é o metodo criado no Session

//temos que exportar as rotas para que a aplicação passe a conhecelas 
module.exports = routes;
