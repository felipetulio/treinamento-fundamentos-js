// CRIANDO ARRAYS

// Este é um array vazio. O tamanho de um array vazio é zero.
const arrTurmas = []
console.log(arrTurmas)
console.log(`Tamanho do array vazio: ${arrTurmas.length}`)

// É possível adicionar elementos aos arrays usando o método nativo .push(). Você pode adicionar
// números, strings ou outros arrays. Agora o tamanho do array mostra quantos elementos ele tem.
arrTurmas.push(10, 2, "Teste")
console.log(arrTurmas)
console.log(`Novo tamanho do array: ${arrTurmas.length}`)

// ----------------------------------------------------------------------------------------------
// ATUALIZANDO ARRAYS

// o método .push() sempre vai adicionar os elementos ao final do array.
arrTurmas.push("Turma de JavaScript", "Turma de PHP", "Turma de Python")
console.log(arrTurmas)

// o método .pop() elimina o último elemento do array.
arrTurmas.pop()
console.log(`Array atualizado retirando o último elemento: ${arrTurmas}`)

// se for necessário manipular elementos em qualquer posição do array, deve-se usar o método 
// .splice(). O primeiro argumento é o índice do array onde a contagem para a exclusão vai 
// começar. O segundo argumento é a quantidade de elementos que devem ser excluídos.
arrTurmas.splice(0, 3);
console.log(arrTurmas)

// Também é possível aproveitar o momento do 'corte' (splice) no array para adicionar algum
// elemento no lugar onde se vai retirar conteúdo.
arrTurmas.splice(1, 1, 'Turma de C++');
console.log(arrTurmas)

// ----------------------------------------------------------------------------------------------
// COPIANDO ARRAYS

// Quando se tenta copiar arrays dessa forma, o array original fica vinculado ao novo. Neste formato
// do código não há cópia propriamente dita dos elementos, mas sim uma atribuição de referência. É
// como se houve uma passagem de posição de memória do array original para o novo. Logo, qualquer 
// alteração no array novo modificará o original.
const arrNovasTurmasVinculada = arrTurmas

// A declaração com a atribuição dessa forma criará, na verdade, um array bidimensional. Em outras 
// palavras, um array dentro de outro array. O exemplo abaixo, o array arrTurmas será um arranjo 
// dentro da posição 0 do array arrNovasTurmasBiDimensional.
const arrNovasTurmasBiDimensional = [arrTurmas]

// Para copiar elementos de um array realmente, usa-se o operador de espalhamento (spread operator).
// Ele é usado para clonar arrays sem alterar o comportamento do array original, ou seja, os elementos
// são realmente copiados para o outro array.
const arrNovasTurmas = [...arrTurmas]

arrNovasTurmas.push("Turma de Java", "Turma de CSharp")

// Imprimma os dois arrays abaixo e você verá que, ao modificar o arrNovasTurmas, não houve mudança
// na variável arrTurmas.
console.log(arrNovasTurmas)
console.log(arrTurmas)


