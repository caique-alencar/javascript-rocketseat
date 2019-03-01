// Função retorna quão experiente o usuário é com base no total de anos de estudo 

function experiencia(anos) {  
    if (ano >= 0 && ano <= 1){
        return "Iniciante"
    } else if (ano > 1 && ano <= 3){
        return "Intermediário"
    } else if (ano > 3 && ano <= 6){
        return "Avançado"
    } else if (ano >= 7) {
        return "Jedi Master"
    }
} 

var anosEstudo = 7; 
console.log(experiencia(anosEstudo));
// De 0-1 ano: Iniciante 
// De 1-3 anos: Intermediário 
// De 3-6 anos: Avançado 
// De 7 acima: Jedi Master



