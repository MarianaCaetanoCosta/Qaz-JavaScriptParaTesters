/* * Repetição do Array
    array.forEach(element => {});
    => representa uma function(função) sem nome
*/

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianopoles','Recife'];

console.log('Estrutura forEach percorrendo o array')
cidades.forEach((elemento, index) => {    
    console.log(`\tCidade ${index}: ${elemento}`);
})

/* * For normal 
    for(variavel e atribuição de valor; condição; incremento/decremento){}
*/

console.log('\nEstrutura FOR')
for (let index = 0; index < cidades.length; index++) { 
    console.log(`\tCidade ${index}: ${cidades}`);
}

/* Em QA você pode usar para:
    - Preencher uma tabela
    - Testar um aplicativo de ioga onde cadas musica tem 3 minutos e só apos você pode avançar
*/