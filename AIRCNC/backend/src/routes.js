const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');


const routes = express.Router(); //Roteador do express
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store); //store é o metodo criado no Session Users

routes.post('/spots', upload.single('thumbnail'), SpotController.store); // registra os spots 


//temos que exportar as rotas para que a aplicação passe a conhecelas 
module.exports = routes;
