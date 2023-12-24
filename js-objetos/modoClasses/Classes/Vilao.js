import Personagem from "./Personagem.js";

// Criação da classe Vilao e exportação padrão (default) de todo o conteúdo da classe. Isso foi feito para que toda a classe estivesse
// visível para outros arquivos no projeto.
export default class Vilao extends Personagem {

  //atributo privado da classe. O símbolo hashtag ( # ) indica que o atributo é privado e só pode ser acessado pelos métodos da classe.
  #maldades

  //construtora da classe
  constructor(nome, raca, equipe, ativo = true, papel = 'Vilão', maldades) {
    // A palavra reservada super() serve para redirecionar os atributos para a super-classe (Personagem). Lembrando que esta é uma sub-classe,
    // ou seja, é uma extensão da classe Personagem.
    super(nome, raca, equipe, ativo, papel)
    this.#maldades = maldades || []
  }

  // Métodos da classe
  exibirInfos() {
    return `Nome: ${this.nome}, Raça: ${this.raca}, Papel: ${this.papel}, Lista de Maldades: ${this.maldades}`
  }

  get maldades(){
    return this.#maldades
  }

  set maldades(novasMaldades){
    this.#maldades = [...novasMaldades]
  }


}
