const peso = document.querySelector("#container__input1");
const altura = document.querySelector("#container__input2");
const botaoEnviar = document.querySelector(".container__botao");

function calculaImc() {
    var pesoValor = peso.value;
    var alturaValor = altura.value;
    var valorImc = Math.round(pesoValor / (alturaValor * alturaValor));
    let classificacao = "normal"
    
    if(valorImc <= 18.5) {
        classificacao = "baixo";
    } else if(valorImc <= 24.9) {
        classificacao = "normal";
    } else {
        classificacao = "elevado";
    }

    alert(`Seu peso é de: ${pesoValor}, sua altura é: ${alturaValor}, seu IMC é de: ${valorImc}. \n
        Segunda a OMS você está com o peso ${classificacao}`);
    
}

botaoEnviar.onclick = calculaImc;
