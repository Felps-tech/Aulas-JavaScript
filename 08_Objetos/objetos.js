/* Objetos
    Objetos são basicamente variáveis com muitos valores dentro.
    Exemplos:
    - Um carro é um objeto, que tem várias propriedades (marca, modelo, cor) e comportamentos (ligar, frear, acelerar).
    - Um carro tem quatro rodas, e cada roda é um objeto;
    - Um livro tem várias páginas, e cada página é um objeto;
    - Uma casa tem vários quartos, e cada quarto é um objeto;
*/
// Objeto
let carro = {
    marca:"ford", 
    modelo:"ka", 
    ano:"2015", 
    placa:"ABC-1234",
    buzina: function (){alert("Beep")}, // Método
    completo: function(){
        return "A marca é " + this.marca + " e o modelo é "+ this.modelo; // This é usado para chamar valor dentro do objeto
    }
    };

console.log(carro);
console.log(carro.ano); // 2015
console.log(carro["placa"]); // ABC-1234
carro.buzina(); // Beep 
console.log(carro.completo()); // A marca é ford e o modelo é ka

/* Propriedades de Objetos */

// Propriedade simples

carro.cor="vermelho";
console.log(carro.cor); // vermelho

// Propriedade dinâmica

function getProp() {
    return "prop" + Math.random().toString(36).substring(7)
}
var propName = getProp();
carro[propName] = "azul";
console.log(carro[propName]); // azul
delete carro[propName];

// Propriedade indexada

carro['rodas']=4;
console.log(carro['rodas']); // 4

// Propriedade herdadas

const obj = Object.create({nome:'João', idade:30});
obj.profissao='programador';
console.log(obj);
console.log(Object.getPrototypeOf(obj));

/* Métodos de Objetos */

// Método construtor

function Carro(marca,modelo,ano,placa){
    this.marca=marca;
    this.modelo=modelo;
    this.ano=ano;
    this.placa=placa;
    };
    Carro.prototype.buzina=function () { alert('beep')};
    let meuCarro = new Carro('Ford','Ka',2019,'ABCD-1234');
    console.log(meuCarro);
    meuCarro.buzina();

/* Métodos de instância vs métodos de protótipo */

    const moto={
        marca:'Harley Davidson',
        modelo:'Street Glide',
        ano:2018,
        placa:'EFGH-1234'
    };
    console.log(moto);
    moto.buzina=function (){alert("vroom")};
    moto.buzina();

/* Métodos de instância vs métodos de protótipo */

    function Veiculo(){
        
    }
    Veiculo.prototype.acelerar=function(){
        console.log('Acelerando...');
    }
    Veiculo.prototype.freiar=function(){
        console.log('Freio...');
    }
    var caminhao=new Veiculo();
    caminhao.acelerar();
    caminhao.freiar();

/* Métodos privados */
    function Pessoa(nome,idade){
        let _sobrenome;
        this.setSobrenome=(s)=>{_sobrenome=s}
        this.getSobrenome=()=>{return _sobrenome;}
        this.nomeCompleto=()=>{return `${this.nome} ${this.getSobrenome()}`}
        this.nome=nome;
        this.idade=idade;
    }
    var pess=new Pessoa('Maria', 56);
    pess.setSobrenome('da Silva');
    console.log(pess.nomeCompleto());

/* Herança */

    function Animal(raca){
        this.raca=raca;
    }
    function Cachorro(raca){
        Animal.call(this, raca); //Chama o construtor do animal e passa a raça como parâmetro
        this.latir=function(){console.log(`${this.raca}: Au!`)}
    }
    var cachorro=new Cachorro('Labrador');
    console.log(cachorro);
    cachorro.latir();

/* Constructor Stealing */

    function MeuObjeto(){
        this.x=10;
        this.y=20;
    }
    var obj = new Object();
    obj.__proto__ = MeuObjeto.prototype;
    console.log(obj.x);//undefined

/* Prototype Chaining */

    function ObjPrototypeChaining(){
        this.valor=10;
        }
    ObjPrototypeChaining.prototype={
        metodo:function () {
            return this.valor + 10;
        },
        outraMetodo:function (){
            return this.metodo()+10;
        }
    };
    var objPC=new ObjPrototypeChaining();
    console.log(objPC.outraMetodo());

/* Encapsulamento */

    class Carro{
        constructor(marca, modelo, ano){
            this._marca=marca;
            this._modelo=modelo;
            this._ano=ano;
            }
        get marca(){
            return this._marca;
        }
        set marca(novaMarca){
            if(typeof novaMarca==='string'){
                this._marca=novaMarca;
            }else{
                throw 'A marca deve ser uma string';
            }
            
        }
        
        acelerar(){
            console.log("Vrummmm!");
        }
    }
    var Carro=new Carro('Ford','Fiesta',2005);
    console.log(meuCarro.marca);
    meuCarro.acelerar();
