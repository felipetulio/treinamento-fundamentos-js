// Array de notas com 4 valores
const notas = [10, 6.5, 8, 7.5]

var somaDasNotasFor = 0

// Laço de repetição For: é o método mais convencional de percorrer um array
for (let i = 0; i < notas.length; i++) {
    somaDasNotasFor += notas[i]
}

const mediaFor = somaDasNotasFor / notas.length
console.log(`A média das notas com For é ${mediaFor}.`)


// -------------------------------------------------
// FOR_OF

let somaDasNotasForOf = 0;

// Laço de repetição For-Of: ele percorre o array sem precisar definir o índice a todo momento.
for (let nota of notas) {
    somaDasNotasForOf += nota;
}

const mediaForOf = somaDasNotasForOf / notas.length
console.log(`A média das notas com ForOf é ${mediaForOf}.`)


// -------------------------------------------------
// FOR_EACH

let somaDasNotasForEach = 0

// Este é um método nativo para percorrer arrays. Ele faz o processo de percorrer o array 
// "por baixo dos panos", sem que a pessoa desenvolvedora precise se preocupar com isso.
// Neste método, você precisa definir a CALLBACK FUNCTION. Callback functions são tarefas que 
// serão executadas para cada elemento. No exemplo abaixo, para cada elemento do array
// será feita a soma das notas e a atribuição dessa soma na variável somaDasNotasForEach.
notas.forEach( function loopTeste(nota) {
    somaDasNotasForEach += nota;
})

const mediaForEach = somaDasNotasFor / notas.length
console.log(`A média das notas com ForEach é ${mediaForEach}.`)