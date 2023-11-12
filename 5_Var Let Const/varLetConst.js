// Var Let Const
// var -> declaração de variáveis sem escopo, pode ser usada em qualquer lugar do código.
// let -> declaração de variáveis com escopo local, é recomendado usar let para evitar conflito de nomes e para facilitar a manutenção do código.
// const -> declaração de constante, não permite mudar o valor da variável após sua atribuição.

// Declaração de variável
var nome, sobrenome, nomeCompleto;

// Atribuição de valores
nome = "Felps";
sobrenome = "Angélico";

// Concatenando as strings
nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto); // Felps Angélico
// Tipos de dados: String, Number, Boolean, Undefined, Null, Object, Array, Function, Date, RegExp, Error, Set, Map, WeakSet, WeakMap, Symbol

/* Var pode ser redeclarado
   var pessoa = "Felps";
   var pessoa = "João";
   console.log(pessoa); // João
*/

/* Let não pode ser redeclarado
   let pessoa = "Carlos";
   let pessoa = "Felps";  
   console.log(pessoa); // Identificar 'pessoa' já foi declarado
*/

/* Mas nesse caso funciona por estarem em lugares diferentes

let x = 10;
{
     let x = 20;
}
 console.log(x); // 10

*/

/* Const não tem como redeclarar
   const g = 9.8;
   const g = 10;
   console.log(g); // Identificar 'g' já foi declarado
*/