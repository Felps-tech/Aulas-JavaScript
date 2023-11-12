// Métodos para arrays
pessoa = ["Rodrigo", "Teixeira", "30"]
pessoa2 = ["Lucas", "Limeira", "26"]
numeros = [10,1,100,25,40,5]
 
//document.getElementById("teste").innerHTML = pessoa; // Rodrigo,Teiceira,30

//document.getElementById("teste").innerHTML = pessoa.join(" * "); // Rodrigo * Teiceira * 30

// length / comprimento
pessoa.length; // 3

// push / adiciona no final
pessoa.push("Aluno"); // ["Rodrigo", "Teixeira", "30", "Aluno"]

// pop / remove do final
pessoa.pop(); // ["Rodrigo", "Teixeira", "30"]

// shift / remove do começo
pessoa.shift(); // ["Teixeira", "30"]

// unshift / adiciona no começo
pessoa.unshift("Professor"); // ["Professor", "Rodrigo", "Teixeira", "30"]

// delete / delete
delete pessoa[1] // ["Rodrigo", undefined, "30"]

// slice / corta um pedaço do array e cria outro array
pessoa.slice(2); // ["30"]

// splice / modifica o array sem precisar criar um novo
pessoa.splice(1, 1, "Pedro"); // ["Rodrigo","Pedro", "30"]

// indexOf / encontra a primeira ocorrência de um valor na lista
pessoa.indexOf("30"); // 2

// lastIndexOf / encontra a última ocorrência de um valor na lista
pessoa.lastIndexOf("30"); // 2

// concat / concatena os arrays
pessoa.concat(pessoa2); // ["Rodrigo", "Teixeira", "30", "Lucas", "Limeira", "26"]

// sort / organiza em ordem alfabetica
numeros.sort(); // [1,10,100,25,40,5] funciona em ordem "alfabetica" com o primeiro numero por isso 1 10 e 100 vem antes do 25
numeros.sort(function(a,b){return a - b}) // 1,5,10,25,40,100
numeros.sort(function(a,b){return a - b}) // 100,40,25,10,5,1

// maior numero
function MaiorNumero(array){
    return Math.max.apply(null,array)
}
MaiorNumero(numeros) // 100

// menor numero
function MenorNumero(array){
    return Math.min.apply(null,array)
}
MenorNumero(numeros) // 1

// soma todos os numeros do array
function SomaNumeros(array){
    let total = 0
    for (let i in array){
        total += array[i];
    }
    return total;
}
SomaNumeros(numeros) // 178

// filter / filtra os valores
function FiltroValor(valor){
    return function(item){
        return item > valor ? true : false;
        }
}
FiltroValor(10)(numeros) // [10, 25, 40]
// OU
numeros.filter(FiltroValor(10)) // [10, 25, 40]

// find / retorna o primeiro elemento que satisfaz a condição
function EncontrarElemento(condicao){
    return function(item){
        return condicao(item) === true ? item : null;
    }
}
EncontrarElemento(FiltroValor(10))(numeros) // 10

// map / transforma cada elemento do array em algo novo
pessoa.map((valor) => {return `${valor}!`;}) // ['arroz!', 'feijão!', 'macarrão!', 'leite!'];
