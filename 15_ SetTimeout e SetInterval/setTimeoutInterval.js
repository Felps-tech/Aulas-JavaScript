/* Eventos de tempo com javascript

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados.
Esses intervalos de tempo são chamados de eventos de cronometragem

Os dois métodos-chave para usar com JavaScript são:

setTimeout(function, tempo, em milisegundos)
-> Executa ema função, depois de esperar um número especificado de milisegundos;

setInterval(function, tempo, em milisegundos)
-> Repete uma determinada função a cada intervalo de tempo (em milisegundos);

*/
function ativarContagem(){
    //document.getElementById("tempo").innerHTML = "Começou a contar"
    // Ativa a função apenas uma vez quando passar o tempo especificado
    //tempo = setTimeout(function(){document.getElementById("tempo").innerHTML = "Executou o setTimeout"}, 5000)
    tempo = setInterval(function(){
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById("tempo").innerHTML = soma;
    }, 1000);
}

function pararContagem(){
    // Para o timeout
    //clearTimeout(tempo);
    //document.getElementById("tempo").innerHTML = "Parou a contagem"
    // Parar o intervalo
    clearInterval(tempo);
}