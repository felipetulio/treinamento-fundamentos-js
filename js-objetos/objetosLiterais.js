// Este é o formato clássico para criação de objetos literais. Objetos literais em JS 
// são equivalentes às instâncias de objetos que são derivadas de classes em outras linguagens.
// Neste exemplo não há nenhuma classe definida anteriormente, pois em Javascript há um Object
// modelo de onde os objetos literais derivam por default e de onde vem o formato chave-valor.
const Personagem = {
    nome: "Superman",
    raca: "Kriptoniano",
    aliados: [
        { nome: "Batman", raca: "Humano" },
        { nome: "Mulher Maravilha", raca: "Deusa" }
    ],
};

// Para adicionar atributos ao objeto, basta usar a notação de objeto e atribuir um valor.
Personagem.atuacao = "Metrópolis";

// Quando o atributo for uma array, é possível acessar os métodos nativos de arrays da linguagem.
Personagem.aliados.push({ nome: "Flash", raca: "Humano" })

console.log(Personagem)

// Para deletar atributos, basta usar o comando delete, seguido do objeto e da indicação do atributo
// a ser excluído.
delete Personagem.atuacao
console.log(Personagem)

// Também é possível acessar os elementos do array que compõem o objeto. Entretanto, é preciso tomar
// cuidado com a sequência de índices do array e as chaves que compõem. Você pode usar notação de 
// objeto ou notação de array para acessar as chaves.
console.log(Personagem.aliados[0].nome)
console.log(Personagem.aliados[0]["raca"])


// -----------------------------------
// Uma forma de percorrer um objeto é usar o laço FOR_IN. Neste método, o objeto é percorrido com
// base em seus atributos (que são chaves em formato de strings).
for (let chave in Personagem) {
    if (Array.isArray(Personagem[chave])) {
        for (let aliado of Personagem[chave]){
            console.log(`${chave}: ${aliado.nome} - ${aliado.raca}`);
        }
    } else {
        console.log(`${chave}: ${Personagem[chave]}`);
    }
}
