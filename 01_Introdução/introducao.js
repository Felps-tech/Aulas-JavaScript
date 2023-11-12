// 1. Crie um algoritmo que leia o nome do usuário e a idade, mostre na tela    
//    "Olá [nome], você tem [idade] anos de idade."
let userName = prompt("Digite seu nome: ");
let age = prompt("Digite sua idade: ");
alert(`Olá ${userName}, você tem ${age} anos de idade.`);
// 2. Escreva um algoritmo que leia dois valores inteiros (A e B) e calcule o resultado
// da operação matemática A + B * 3 - 4 / 2;
let num1 = parseInt(prompt('Insira o primeiro valor'));
let num2 = parseInt(prompt('Insira o segundo valor'));
let result = (num1 + num2 * 3 - 4) / 2;
console.log(`Resultado: ${result}`);
// 3. Faça um algoritmo que leia uma frase qualquer e retorne se ela é palindromo
function isPalindrome() {
    let str = prompt('Insira uma frase');
    let reverseStr = '';
    for (let i = str.length-1; i >=0 ; i--){
        reverseStr += str[i];
        }
    if (str == reverseStr) {
        alert('Essa frase é um palíndromo!')
    } else {
        alert('Não é um palíndromo!')
    }
}
isPalindrome();
// 4. Escreva um algoritmo que leia um número e verifique se ele é par ou impar
function checkNumber(){
    let number = prompt('Insira um número');
    if (number % 2 === 0) {
        console.log('Esse número é Par!')
        }else{
        console.log('Esse número é Impar!')
    }
}
checkNumber();

