const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router(); //Roteador do express
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store); //store é o metodo criado no Session Users

routes.get('/spots', SpotController.index);

routes.post('/spots', upload.single('thumbnail'), SpotController.store); // registra os spots 

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store); //registra as reservas 


//temos que exportar as rotas para que a aplicação passe a conhecelas 
module.exports = routes;
