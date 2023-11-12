/*  Eventos

Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparo quando recebe um click
ondblclick -> Disparado ao clicar duas vezes em um elemento
onmouseover -> Disparado quando passa por cima de um elemento
onmouseout -> Disparado quando sai do elemento
onmousemove -> Disparado quando o mouse é movido no elemento
onmousedown -> Disparado quando o clique do botão foi pressionado
onmouseup -> Disparado quando o clique do botão foi soltado
onfocus -> Disparado quando o elemento recebe um foco. Válido para input,
onchange -> Disparado quando existe mudança no conteudo
onblur -> Disparado quando o elemento perde o foco
onkeydown -> Disparado quando uma tecla é pressionada
onkeypress -> Disparado quando uma tecla é liberada
onkeyup -> Disparado quando uma tecla é solta
onload -> Disparado quando a página terminou de ser carregada. Body
onresize -> -> Disparado quando há um redimencionamento da janela
onsubmit -> Disparado quando um formulário é enviado
onscroll -> Disparado quando a janela descer ou subir

*/
// ONCLICK
function eventoClick(){
    alert("Acionou um evento de click");
}
// ONDBLCLICK
function eventoDblClick(){
    alert("Acionou um evento de double click");
}
// ONMOUSEOVER
function viraVermelho(){
    let div = document.getElementById("bloco");
    div.style.backgroundColor="red";
}
// ONMOUSEOUT
function viraAzul(){
    let div = document.getElementById("bloco");
    div.style.backgroundColor="blue";
}
// ONMOUSEMOVE
//function adicionaTexto(){
//    let p = document.getElementById("bloco");
//    p.append("O mouse moveu");
//}
// ONFOCUS
function limpaTexto(){
    document.getElementById("input").value = "";
}
// ONCHANGE
function mudou(){
    console.log("Mudou");
}

// ONKEYDOWN, ONKEYPRESS, ONKEYUP
function tecla(){
    let input = document.getElementById("input4").value;
    console.log(input);
}
