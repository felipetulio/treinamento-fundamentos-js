// Importação das classes que criamos no projeto. Esse método só funciona desde a atualização que ocorreu na sintaxe da linguagem (ECMAScript 2016).
// Para que esse formato funcione, é preciso colocar no package.json o seguinte código: "type": "module"
import Personagem from "./Classes/Personagem.js";
import Heroi from "./Classes/Heroi.js";
import Vilao from "./Classes/Vilao.js";

// Um objeto do tipo Personagem, sendo instanciado com os dados passados. Depois, o método exibirInfos() é acionado e o resultado é impresso no console.log()
const novoPersonagem = new Personagem('Jimmy Olsen', 'Humano')
console.log(novoPersonagem.exibirInfos())

// Um objeto do tipo Heroi, sendo instanciado com os dados passados. Depois, o objeto adiciona valores no atributo 'heroismos' que está declarado na classe. Por fim, o método exibirInfos() é acionado e o resultado é impresso no console.log(). ATENÇÃO: o método exibirInfos() chamado é o que está definido na classe Heroi.
const novoHeroi = new Heroi('Superman', 'Kriptoniano', 'Liga da Justiça')
novoHeroi.heroismos = ['Salvou a Terra inúmeras vezes', 'Venceu o Darkside']
console.log(novoHeroi.exibirInfos())

// Um objeto do tipo Vilao, sendo instanciado com os dados passados. Depois, o objeto adiciona valores no atributo 'maldades' que está declarado na classe. Por fim, o método exibirInfos() é acionado e o resultado é impresso no console.log(). ATENÇÃO: o método exibirInfos() chamado é o que está definido na classe Vilao.
const novoVilao = new Vilao('Coringa', 'Humano', 'Liga dos Vilões')
novoVilao.maldades = ['Matou o segundo Robin', 'Alejou a Bárbara Gordon']
console.log(novoVilao.exibirInfos())

// Imprime a lista de maldades atribuída ao objeto 'novoVilao', conforme o método get definido na classe.
console.log(novoVilao.maldades)
