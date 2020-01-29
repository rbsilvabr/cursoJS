/*
const nome = 'Rodrigo';
const sobrenome = 'Belo';

const falaNome = () => nome + ' ' + sobrenome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'Qq coisa';

//console.log(exports);
*/

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;