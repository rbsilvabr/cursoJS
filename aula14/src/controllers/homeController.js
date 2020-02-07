// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Outra coisa',
//     descricao: 'Outra descrição de testes.'
// })
// .then(dados => console.log(dados))
// .catch(e => console.log(e));

// HomeModel.find()
// .then(dados => console.log(dados))
// .catch(e => console.log(e));


exports.paginaInicial = (req, res) => {
    console.log('Respondendo ao cliente.');
    //console.log(`Olha o que tem no req.session.nome: ${req.session.nome}`)
    res.render('index');
    return;
    //next();
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}

exports.rotaContato = (req, res) => {
    res.send('Nova rota de Contato!');
}