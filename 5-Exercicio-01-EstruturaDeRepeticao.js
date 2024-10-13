/* Exercício 1 - Estrutura de repetição
    * Percorrer uma lista de nomes: Eduardo, Maria, João, Francisco
        
    * Coloque as informações da execução:
            - número da execução, comecando em 1
            - nome que está sendo executado
            - uso de separadores

    * Exemplo:
    Execução: 1
    Nome: Eduardo
*/

const nomes = ['Eduardo', 'Maria', 'João', 'Francisco'];

nomes.forEach((elemento, index) => {
    console.log(`Execução ${index + 1}: ${elemento}`);
});