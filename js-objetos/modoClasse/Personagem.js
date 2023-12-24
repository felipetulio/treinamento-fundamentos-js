export default class Personagem {
    #nome
    #raca
    #equipe
    #ativo
    #papel

    constructor(nome, raca, equipe, ativo = true, papel){
        this.#nome = nome
        this.#raca = raca
        this.#equipe = equipe || "Não faz parte de equipe"
        this.#ativo = ativo
        this.#papel = papel || "NPC"
    }

    get nome(){
        return this.#nome
    }

    get raca(){
        return this.#raca
    }

    get equipe(){
        return this.#equipe
    }

    get ativo(){
        return this.#ativo
    }

    get papel(){
        return this.#papel
    }

    set nome(novoNome){
        if(novoNome === ''){
            throw new Error('formato inválido')
        }
        this.#nome = novoNome
    }

    exibirInfos(){
        return `${this.#nome}, ${this.#raca}, ${this.#equipe}, 
        ${this.#ativo}, ${this.#papel}`;
    }












}