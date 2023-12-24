import Personagem from "./Personagem.js";

// Criação da classe Heroi e exportação padrão (default) de todo o conteúdo da classe. Isso foi feito para que toda a classe estivesse
// visível para outros arquivos no projeto.
export default class Heroi extends Personagem {

  //atributo privado da classe. O símbolo hashtag ( # ) indica que o atributo é privado e só pode ser acessado pelos métodos da classe.
  #heroismos

  //construtora da classe
  constructor(nome, raca, equipe, ativo = true, papel = 'Herói', heroismos) {
    // A palavra reservada super() serve para redirecionar os atributos para a super-classe (Personagem). Lembrando que esta é uma sub-classe,
    // ou seja, é uma extensão da classe Personagem.
    super(nome, raca, equipe, ativo, papel)
    this.#heroismos = heroismos || []
  }

  // Métodos da classe
  exibirInfos() {
    return `Nome: ${this.nome}, Raça: ${this.raca}, Papel: ${this.papel}, Lista de Heroismos: ${this.#heroismos}`
  }

  get heroismos(){
    return this.#heroismos
  }

  set heroismos(novosHeroismos){
    this.#heroismos = [...novosHeroismos]

  }

}

