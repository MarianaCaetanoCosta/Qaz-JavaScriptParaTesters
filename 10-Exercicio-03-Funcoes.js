/* * Exercício 3 - Funções
    * Criar uma função que soma 2 numeros e retorna esse numero somado
    * Deve ser enviado os 2 números por parâmetro
    * 
    * Exemplo:
    * Numero1: 20
    * Numero2: 10
    * Soma: Numero1 + Numero2 = 30
 */

 //Retornar Valor
function somarNumerosReturn(numero1, numero2) {
    return numero1 + numero2;
}
console.log('* SomarNumerosReturn => Soma: ' + somarNumerosReturn(20, 10))

//Atribuir valor a uma variável
function somarNumerosVariavel(numero1, numero2) {
    const resultado = numero1 + numero2;
    console.log(`* SomarNumeroComVariavel => Soma: ${numero1} + ${numero2} = ${resultado}`);
}
somarNumerosVariavel(12, 8)