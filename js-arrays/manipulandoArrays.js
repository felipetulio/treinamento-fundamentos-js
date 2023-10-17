// CRIANDO ARRAYS

const arrTurmas = []
console.log(`Array vazio: ${arrTurmas}`)
console.log(`Tamanho do array vazio: ${arrTurmas.length}`)

arrTurmas.push(10, 2, "Teste")
console.log(`Array agora com conteúdo: ${arrTurmas}`)
console.log(`Novo tamanho do array: ${arrTurmas.length}`)

// ATUALIZANDO ARRAYS

arrTurmas.push("Turma de JavaScript", "Turma de PHP", "Turma de Python")
console.log(`Array atualizado com nomes das turmas: ${arrTurmas}`)

arrTurmas.pop()
console.log(`Array atualizado retirando o último elemento: ${arrTurmas}`)

arrTurmas.splice(0, 3);
console.log(`Array ajustado com elementos retirados em qualquer lugar: ${arrTurmas}`)

arrTurmas.splice(1, 1, 'Turma de C++');
console.log(`Array ajustado com elementos retirados em qualquer lugar: ${arrTurmas}`)

// COPIANDO ARRAYS

// O operador de espalhamento (spread operator) é usado para clonar arrays sem alterar o 
// comportamento do array original
const arrNovasTurmas = [...arrTurmas]

arrNovasTurmas.push("Turma de Java", "Turma de CSharp")

console.log(`As novas turmas são ${arrNovasTurmas}`)
console.log(`As notas originais são ${arrTurmas}`)


