// index(criando um metodo que retorna uma listagem), show(retorna uma unica Session), store(criar uma Session), 
// update, destroy
//criando um usuário pegando do modelo
const User = require('../models/User');


module.exports = {
async store(req, res){
    const email = req.body.email;
    let user = await User.findOne({email: email});
    
    if (!user){
        user = await User.create({ email })
    }
    return res.json(user);
    }
};