function gerarNome(nome, sobrenome){
   return(`Nome: ${nome} | Sobrenome: ${sobrenome}`)        
}

 //Retornar Valor
console.log(gerarNome('Theodoro', 'Caetano Costa', 10))

//Atribuir valor a uma variável
const nomeGerado = gerarNome('Theodoro', 'Caetano Costa', 10)
console.log(nomeGerado)