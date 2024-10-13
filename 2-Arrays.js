/* Array:
    - Lista de dados
    - Ele é composto pelo valor e indice, o indice começa em 0 (zero)
*/

const paises = ['Brasil', 'Argentina', 'Alemanha']
console.log(paises) //Imprime todos os elementos do array
console.log('Acessando pais:' + paises[0]) //Acessar elemento/posição no array
console.log('Tamanho: ' + paises.length) //Acessar o tamanho
console.log('Paises: ' + paises) //Concatenar strings


/* Métodos de array:
    - push() adiciona um novo elemento ao final do array
    - pop() remove o último elemento do array
    - shift() remove o primeiro elemento do array
    - unshift() adiciona um novo elemento no início do array
*/

paises.push('Canadá') //Adicionar um novo elemento
console.log(paises)

paises.pop() //Remover o último elemento
console.log(paises)

paises.unshift('França') //adiciona um novo elemento no início do array
console.log(paises)

paises.shift() //Remover o primeiro elemento
console.log(paises)