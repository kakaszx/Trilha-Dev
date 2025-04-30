let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
function mensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
}

mensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Você acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentaivas = `Você descobriu o número secreto! com ${tentativas} ${palavraTentativa}.`;
    exibirTextoNaTela("p", mensagemTentaivas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela("h1", "Você errou! O número secreto é menor.");
    exibirTextoNaTela("p", "Tente novamente.");
  } else {
    exibirTextoNaTela("h1", "Você errou! O número secreto é maior.");
    exibirTextoNaTela("p", "Tente novamente.");
  }
  tentativas++;
  limparCampo();
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 100 + 1);
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function novoJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
