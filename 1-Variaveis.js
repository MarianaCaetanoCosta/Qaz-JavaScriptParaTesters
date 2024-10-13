/*
    * Tipos de variáveis
    var: o dado pode ser alterado
    let: o dado pode ser alterado
    const: o dado NÂO pode ser alterado

    * Quais tipos de dados podem receber
    string: texto
    numeros:
    boolean: true ou false
    array: lista de dados
    objeto: composto por chave valor, ou seja, nome e valor
    função:

    * Imprimir no console
    console.log(informações);

    * Executar o projeto/arquivo
    1. Abra o terminal    
    node "Nome do arquivo"
*/

var nome = 'Mariana';
nome = 'Caetano';
console.log('nome: ' + nome);

let idade = 20;
idade = 37;
console.log('idade: ' + idade);

const cidade = 'Belo Horizonte';
cidade = 'São Paulo';
console.log('cidade: ' + cidade);

const paises = ['Brasil', 'Argentina', 'Alemanha']
console.log('paises: ' + paises);

let devices = {
    nome: 'IPhone 14',
    preco: 8000,
    cores: {
        cor1: 'verde',
        cor2: 'amarelo'
    }
}