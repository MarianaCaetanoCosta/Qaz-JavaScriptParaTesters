/* Exercício 2 - Estrutura de decisão
    * Percorrer uma lista de cidades: ['São Paulo', ' Rio de Janeiro', ' Florianopoles',' Recife'];
        
    * Para cada item, verificar se a cidade Florianopoles está presente na lista
    * Printar nome da cidade
    * Se sim, avisar que a cidade Florianopoles está presente. 
    * Caso esteja avisar
    * Caso não seja o elemento procurado, avisar
    * Numero da execução

    * Exemplo:
    Execução: 1
    Cidade: São Paulo
    Existe: Encontrado / Não encontrado
*/

const cidades = ['São Paulo ', 'Rio de Janeiro ', 'Florianopoles ','Recife'];

console.log(`\nCidades: ${cidades}\n`);

cidades.forEach((cidade, index) => {

    console.log(`Execução: ${index + 1} | Cidade: ${cidade}`);

    if (cidade == 'Florianopoles'){
        console.log('Encontrada!');
    }else{
        console.log('Não Encontrada!');
    }
    console.log('--------------------------------');
})