/* Array
Os arrays JS são usados para armazenar vários valores em uma única variável. 
Diferente dos objetos, que funcionam com propriedades ou "nomes" que você da para os itens dentro dele,
os arrays não possuem propriedades. O item dentre dele é encontrado pela posição

Ex: const lista = ["arroz","feijao","macarrão","leite"]
console.log(lista[0]) // retorna o primeiro elemento do array (arroz)
console.log(lista[2]) // retorna o terceiro elemento do array (macarrão)
*/
var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";

//Criando um array

var listaDeCompras1 = [item1, item2, item3, item4];

// Pode tambem ser feito assim
var listaDeCompras2 = ["arroz", "feijão", "macarrão", "leite"];

// Tanto quanto assim
var listaDeCompras3 = [];
listaDeCompras3[0] = "arroz";
listaDeCompras3[1] = "feijão";
listaDeCompras3[2] = "macarrão";
listaDeCompras3[3] = "leite";

// Assim tambem funciona

var listaDeCompras4 = new Array("arroz", "feijão", "macarrão", "leite");


            
