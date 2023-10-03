// A variável do tipo const -> é uma "variável" constante que precisa ter um valor
// de inicialização e que não será alterado.
const objNull = null

console.log(`Esse é um objeto vazio (Null): ${objNull}`)
console.log(`Esse é o tipo da variável Null: ${typeof objNull}`)


// A variável do tipo let -> tem que declarar a variável antes de usar
let objUndefined

// A variável do tipo var -> são variáveis que podem ser usadas em qualquer lugar
// do código, mesmo antes de nossa declaração "oficial". É o tipo padrão do JS.
var objUndefined2

console.log(`Esse é um objeto indefinido (Undefined): ${objUndefined}`)
console.log(`Esse também é um objeto indefinido (Undefined): ${objUndefined2}`)