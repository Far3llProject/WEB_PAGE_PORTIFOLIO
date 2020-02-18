//imports
const express = require("express");
const mongoose = require("mongoose"); 
const routes = require('./routes');
//criando a aplicação 
const app = express();

//depois de configurar o DB basta colcar a URL que o site disponibilizou e atualizar o usuário e a senha
mongoose.connect('mongodb+srv://Omnistack:Omnistack@omnistack-kjrqt.gcp.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// funções: GET(visualizar) , POST(inserir), PUT(atualizar) e DELETE(deletar)
// req = requisição / res = resposta 
// req.query = Acessar os query params (para filtros) 
// req.params = Acessar rout params (para edição e delete) 
// req.body = Acessar o corpo da requisição (para criação, edição)

app.use(express.json()); // estou dizendo ao expresse pra usar o formato json
app.use(routes);

//definir a porta que vai executar a aplicação
app.listen(3333);

//add nodemon apenas no desenvolvimento > yarn dev para iniciar o servidor 
//add mongoose
//node src/server.js para iniciar o servidor 
//
