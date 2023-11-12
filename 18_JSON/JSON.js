/* JSON 

JSON = JavaScript Object Notation = Notação de objeto JavaScript

JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, 
já que o formato de texto é lido por praticamente toda linguagem de programação

Para trabalhar com o JSON no Javascript usamos dois métodos:

- JSON.parse() - Converte um texto em um Objeto (devolve um JSON)
- JSON.stringify() - Converte um Objeto em Texto (devolve um String)

*/

// Objeto 
const carro = {
    marca: "Ford",
    modelo: "Fiesta",
    motor: ["1.6","1.4","1.0"]
}

// Tentando ler objeto como texto

document.getElementById("area").innerHTML = carro // {object Object} Não se consegue ler um objeto pois só a linguagem de programação consegue entende

// Tranformando para string

let texto = JSON.stringify(carro)

document.getElementById("area").innerHTML = texto // {"marca":"Ford","modelo":"Fiesta","motor":["1.6","1.4","1.0"]}

// Tentando ler texto como objeto

console.log(texto.modelo) // undefined 

// Tranformando para objeto

let objCarro = JSON.parse(texto)

document.getElementById("area").innerHTML = objCarro.modelo // Fiesta

// Pegando item de matriz

console.log(obj.motor[2]) // "1.0"

//Viacep JSON de CEP

const ajax = new XMLHttpRequest();
ajax.open('GET','https://viacep.com.br/ws/01001000/json/')
ajax.send()

ajax.onload = function(){
    document.getElementById("area").innerHTML = this.responseText;
}
/* {
    "cep": "01001-000"
    "logradouro": "Praça da Sé"
    "complemento": "lado ímpar"
    "bairro": "Sé"
    "localidade": "São Paulo"
    "uf": "SP"
    "ibge": "3550308"
    "gia": "1004"
    "ddd": "11"
    "siafi": "7107"
    }
*/