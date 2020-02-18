const mongoose = require('mongoose');

//modelo do usuário 
const UserSchema = new mongoose.Schema({
    email: String
        
});

//Exportar o modelo para o banco de dados
module.exports = mongoose.model('User', UserSchema);