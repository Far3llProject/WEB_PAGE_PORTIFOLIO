const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    //criar a listagem de Spots com filtro por tecnologia
    //criando um metodo index
    async index(req, res){
        //pegar a informação da query (filtro)
        const { tech } = req.query;
    
        //filtrar no banco 
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
        //agora tenho que criar a rota 
    },



    async store(req, res){
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers; 
        //serve para pegar o contexto da aplicação, autenticação
        const user = await User.findById(user_id);
        if(!user){
            return res.status(400).json({ error: 'User does not exists'});
        }
        //criar o spot
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json({spot})
    }
}