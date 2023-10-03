// Tipos primitivos de variáveis em JS -> números (inteiros e flutuantes), 
// palavras ou texto (Strings) e booleanos.

// A tipagem da linguagem é dinâmica. 
const meuNumero = 3;
const primeiroNumero = 1
const segundoNumero = 2

const op = primeiroNumero + segundoNumero

// primeira forma de casting para impressão de resultados no console. Método tradicional 
// usando o operador + como mecanismo de concatenação. 
console.log("o resultado da operação é " + op.toString())

// segunda forma de casting para impressão de resultados no console. Método alternativo do
// JS chamado de Template String. Nesse método é realizada uma interpolação de texto e variáveis.
// É mais prático para formar sentenças de saída com diversas
// variáveis
console.log(`O resultado da operação é ${op}`)

// Strings podem ser escritas com aspas duplas ou simples
const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';

console.log(texto1)
console.log(texto2)


const numBooleano1 = true
const numBooleano2 = true

// Comparação com 2 simbolos de igual (==) -> comparação com conversão implícita
// de tipos. Logo, compara apenas os valores
if(numBooleano1 == numBooleano2){
    console.log(`A variável numBooleano1 é ${numBooleano1}`)
} 

// Comparação com 3 simbolos de igual (===) -> comparação sem conversão implícita 
// de tipos. Logo, compara os valores e o tipo das variáveis
if(numBooleano1 === numBooleano2) {
    console.log(`A variável numBooleano2 é ${numBooleano2}`)
}
