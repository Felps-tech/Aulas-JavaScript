// Manipulaçao de datas em JavaScript

// Comando Base para pegar a data
let data = new Date(); // Dia da semana,Mês, Dia, Ano, Hora minuto segundo, GMT 0300

// Ano atual com 4 digitos
let ano = data.getFullYear();

// Mes atual de 0 até 11 (0-Janeiro e 11-Dezembro)
let mes = (data.getMonth() + 1);

// Dia atual do mes
let dia = data.getDate();

// Horas atuais
let horas = data.getHours();

// Minutos atuais
let minutos = data.getMinutes();

// Segundos atuais
let segundos = data.getSeconds();

// Milisegundos atuais
let miliSegundos = data.getMilliseconds();

// Data padrão brasileiro
let dataBR = data.toLocaleString("pt-BR") // DD/MM/AAAA HH:MM:SS

let dataBRCurto = data.toLocaleString("pt-BR",{dateStyle:"short"}) // DD/MM/AAAA

// Data completa no formato DD/MM/AAAA
console.log(dia + "/" + mes + "/" + ano);

// Mostrar o dia da semana
switch (data.getDay()) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-Feira");
        break;
    case 2:
        console.log("Terça-Feira");
        break;
    case 3:
        console.log("Quarta-Feira");
        break;
    case 4:
        console.log("Quinta-Feira");
        break;
    case 5:
        console.log("Sexta-Feira");
        break;
    case 6:
        console.log("Sábado");
        break;
}

// Mostra as horas formatadas
if (horas < 10){
    horas = "0"+horas;
}else{
    horas = horas;
}
if (minutos < 10){
    minutos = "0"+minutos;
}else{
    minutos = minutos;
}
if (segundos < 10){
    segundos = "0"+segundos;
}else{
    segundos = segundos;
}

// Comparar Datas - Maior ou Menor Ex. Vencimento
var hoje = new Date();
var Vencimento = new Date(2024, 0, 15); // 15 de Janeiro de 2023
if (hoje > Vencimento) {
    console.log('Você atrasou!');
} else if (hoje == Vencimento) {
    console.log('Hoje é a data do vencimento!');
} else {
    console.log('Ainda falta para o vencimento!')
};

// Diferença entre duas datas em dias
function diferencaDatas() {
    var dataInicio = new Date(2023, 0, 15);
    var dataFim = new Date();
    var tempoDecorridoEmMilisegundo = Math.abs(dataFim - dataInicio);
    return Math.ceil(tempoDecorridoEmMilisegundo / (1000 * 60 * 60 * 24)); // ceil arredonda
}
console.log(`Diferença das datas: ${diferencaDatas()} dias`);
