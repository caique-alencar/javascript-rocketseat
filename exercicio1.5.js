function mostraHabilidades(dados){
    for usuario in dados{
        return "O " + usuario.nome + " tem as habilidades: " + usuario.habilidades.join(", ") // comando join junta todos os itens de uma lista
    }
}

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

console.log(mostraHabilidades(usuarios));