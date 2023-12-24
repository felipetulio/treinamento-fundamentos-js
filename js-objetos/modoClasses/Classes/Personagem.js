// Criação da classe Personagem e exportação padrão (default) de todo o conteúdo da classe. Isso foi feito para que toda a classe estivesse
// visível para outros arquivos no projeto.
export default class Personagem {
  //atributos privados da classe. O símbolo hashtag ( # ) indica que os atributos são privados e só podem ser acessados pelos métodos da classe.
  #nome
  #raca
  #equipe
  #ativo
  #papel

  //construtora da classe
  constructor(nome, raca, equipe, ativo = true, papel) {
    this.#nome = nome
    this.#raca = raca
    this.#equipe = equipe || 'Não faz parte de equipe'
    this.#ativo = ativo
    this.#papel = papel || 'NPC'
  }

  // Métodos da classe
  get nome() {
    return this.#nome
  }

  get raca() {
    return this.#raca
  }

  get equipe() {
    return this.#equipe
  }

  get ativo() {
    return this.#ativo
  }

  get papel() {
    return this.#papel
  }

  set nome(novoNome) {
    if (novoNome === '') {
      throw new Error('formato inválido')
    }
    this.#nome = novoNome
  }

  set raca(novaRaca) {
    if (novaRaca === '') {
      throw new Error('formato inválido')
    }
    this.#raca = novaRaca
  }

  set equipe(novaEquipe) {
    if (novaEquipe === '') {
      throw new Error('formato inválido')
    }
    this.#equipe = novaEquipe
  }

  set ativo(novoAtivo) {
    if (novoAtivo === '') {
      throw new Error('formato inválido')
    }
    this.#ativo = novoAtivo
  }

  set papel(novoPapel) {
    if (novoPapel === '') {
      throw new Error('formato inválido')
    }
    this.#papel = novoPapel
  }

  exibirInfos() {
    return `${this.#nome}, ${this.#raca}, ${this.#equipe}, ${this.#ativo}, ${this.#papel}`;
  }
}
