const mongoose = require('mongoose');
//Esquema do Negócio
//modelo do usuário 
const SpotSchema = new mongoose.Schema({
    //aqui dentro colocar os campos a serem armazenados no banco de dados 
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String], //array de strings
  user: {
      type: mongoose.Schema
  }
        
});

//Exportar o modelo para o banco de dados
module.exports = mongoose.model('Spot', SpotSchema);