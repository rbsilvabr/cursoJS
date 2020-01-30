const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');

function meuMiddleware(req, res) {
    req.session = { nome: 'Luiz', sobrenome: 'Miranda' };
    console.log('');
    console.log('Passei no seu middleware.');
    console.log('');
    //next();
}

//Rotas da home
/* route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next) { 
    console.log();
    console.log('Ainda estou aqui...');
    console.log(`Olha o que tem no req.session.nome: ${req.session.nome}`)
    console.log();
 }); */
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', homeController.rotaContato);

module.exports = route;
