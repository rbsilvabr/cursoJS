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