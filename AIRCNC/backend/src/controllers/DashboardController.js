const Spot = require('../models/Spot');

module.exports = {
async show(req, res){
    const { user_id } = req.headers; // verifica o usuário logado

const spots = await Spot.find({ user: user_id });//retorna todos os spots do usuário 

return res.json(spots);
}

}