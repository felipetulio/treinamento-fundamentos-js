// Aqui temos duas variáveis do tipo const. Ambas são arrays de strings
const salaCpp = ['Júlio', 'Nick', 'Thiago']
const salaJava = ['Juliana', 'Layssa', 'Bárbara']

// Para unificar os arrays, pode-se utilizar o método .concat().
const salasUnificadas = salaCpp.concat(salaJava)
console.log(salasUnificadas)

// Um array de números inteiros e reais
const mediasTurmas = [10, 8, 7.5, 9, 4, 6.5]

// Essa variável é um array bidimensional, onde a posição 0 tem um array (salasUnificadas) e a 
// posição 1 tem outro array (mediasTurmas).
const listaDeAlunosEMedias = [salasUnificadas, mediasTurmas]

// Esta é uma chamada de função. Mesmo que a chamada da função esteja sendo feita antes que ela
// seja declarada, este código funcionará no JavaScript por causa do hoisting.
exibeNomeENota("Nick")

// Esta função imprime o nome e a nota do aluno passado como parâmetro na chamada da função.
// O método de arrays .includes() verifica se há algum elemento que coincide com o parâmetro passado
// e retorna true ou false. Isso pode ser usado para tomadas de decisão.
// O método de arrays .indexOf() recupera o índice do array onde o elemento procurado está 
// armazenado.
function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`O(A) ${aluno} está cadastrado(a).`)
        const indiceAluno = listaDeAlunosEMedias[0].indexOf(aluno)
        const mediaAluno = listaDeAlunosEMedias[1][indiceAluno]
        console.log(`A média do(a) aluno(a) é ${mediaAluno}.`)
    } else {
        console.log(`O ${aluno} não está cadastrado.`)       
    }
}