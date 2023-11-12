/* Classes em JavaScript
    As classes são como "Fábricas" para criar objetos.
    Pode se dizer que são "Funções especiais" para criação de objetos

    Assim como uma fábrica da vida real precisa das máquinas para construir os objetos,
    as Classes no Javascript usam um método chamado constructor() para fabricar os objetos.
*/

const carro = {
    marca: "Fiat",
    modelo: "Palio",
    ano: 2015,
    ligarMotor(){
        console.log("Ligando o motor do carro...");
    }
}

// Classe Carro

class Carro{
    // Construtor é a função especial responsável por criar e configurar o novo objeto
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
    // Métodos (funções)
    ligarMotor(){
        console.log(`${this.marca} ${this.modelo} está ligando o motor`);
    }
    trocarPneus(){
        console.log('Trocando pneus');
    }
}

let fiat = new Carro('Fiat','Uno',2018);
console.log(fiat);
fiat.ligarMotor(); // Fiat Uno está ligando o motor
fiat.trocarPneus(); // Trocando pneus
fiat.ano = 2014
console.log(fiat.ano) // 2014
/*
O operador 'new' é utilizado para instanciar um novo Objeto apartir de uma classe.
A palavra-chave 'constructor' é opcional, mas é recomendada por ser mais legível.
*/

/* Herança */

// Criamos outra

class Camaro extends Carro{
    trocarParabrisas(){
        console.log('Trocando parabrisas');
    }
}
let camaro = new Camaro('Chevrolet','Camaro',2019);
camaro.ligarMotor();
camaro.trocarPneus();
camaro.trocarParabrisas();

/*
A palavra chave 'extends' é usada para herdar os atributos e métodos da superclasse (Carro neste caso).
Ao invés de ter que recriar todos os atributos e métodos, basta usar a palavra chave 'super'.
*/