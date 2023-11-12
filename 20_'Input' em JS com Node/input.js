// Importação do módulo readline:
// O código começa importando o módulo readline, que é usado para criar uma interface de linha de comando para obter input do usuário.
const readline = require('readline');

// Criação da interface de linha de comando:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Perguntas e Respostas:
rl.question('Input: ', (a) => {console.log(`Você digitou no input: ${a}`)});
