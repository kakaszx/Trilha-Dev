let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}
exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 100");


function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Você acertou!");
        exibirTextoNaTela("p", "Você descobriu o número secreto!");
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela("h1", "Você errou! O número secreto é menor.");
        exibirTextoNaTela("p", "Tente novamente.");
    } else {
        exibirTextoNaTela("h1", "Você errou! O número secreto é maior.");
        exibirTextoNaTela("p", "Tente novamente.");
    }
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 100 + 1);
}