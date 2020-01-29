/*
const { nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());
*/
//const path = require('path');
//const axios = require('axios');
//const { Pessoa } = require('./mod1');

axios('pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));

/*
const PessoaInst = new Pessoa('Rodrigo');
console.log(PessoaInst.nome);
console.log(path);
*/

