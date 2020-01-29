exports.paginaInicial = (req, res) => {
    
    res.render('index');

}

exports.trataPost = (req, res) => {

    res.send('Nova rota de POST!');

}

exports.rotaContato = (req, res) => {

    res.send('Nova rota de Contato!');

}