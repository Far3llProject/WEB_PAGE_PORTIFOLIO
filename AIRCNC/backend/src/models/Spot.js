const mongoose = require('mongoose');
//Esquema do Negócio
//modelo do usuário 
const SpotSchema = new mongoose.Schema({
    //aqui dentro colocar os campos a serem armazenados no banco de dados 
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String], //array de strings
  //guardando somente o id de quem criou o spot
  //como é um banco não-relacional isso aqui cria-se uma relação praticamente manual podendo depois
  //listar todos os spots cadastrados pelo mesmo id 
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
  }
        
});

//Exportar o modelo para o banco de dados
module.exports = mongoose.model('Spot', SpotSchema);