// if e else
var interruptor = "on";

if (interruptor == "on"){
    console.log("Ligada");
}else {
    console.log("Desligada");
}

var hora = new Date().getHours();

if(hora < 12){
    console.log('Bom dia');
}
else if(hora <= 18){
    console.log('Boa tarde');
}
else{
    console.log('Boa noite');
}

// Exemplo

function verificar(){
    let nome = document.getElementById("nome").value;
    if (nome == "" || nome == null){
        p = document.getElementById("teste")
        p.innerHTML = "O campo não pode ser vazio"
        p.style.color = "red";
    }
    else{
        p = document.getElementById("teste")
        p.innerHTML = "Nome: " + nome
        p.style.color = "green";
    }
}