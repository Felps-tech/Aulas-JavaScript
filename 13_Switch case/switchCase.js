/* Switch

switch(expressao) {
    case a:
        // o que acontece
        break;
    case b:
        // o que acontece
        break;
    case c:
        // o que acontece
        break;
    default:
        // o que acontece se nenhum dos casos for verdadeiro
}

*/

function verificarCor(){
    let cor = "azul";
    
    switch (cor){
        case "vermelho":
            console.log("Você escolheu vermelho!");
            break;
        
        case "amarelo":
            console.log("Você escolheu amarelo!");
            break;
            
        case "azul":
            console.log("Você escolheu azul!");
            break;
            
        default:
            console.log("Não é um valor válido");
    }
}

