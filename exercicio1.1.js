// Função exibe o endereço concatenado com base em uma variável com vários objetos
function mostraEndereco(dados){
    msgEndereco = ("O usuário mora em " + endereco.cidade + "/" + endereco.uf + ", no bairro " + endereco.bairro + ", na " + endereco.rua + " com número " + endereco.numero + ".")
    return msgEndereco;
}

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

console.log(mostraEndereco(endereco));