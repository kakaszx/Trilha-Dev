let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
function mensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
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
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeNumeros = numerosSorteados.length;

  if (quantidadeDeNumeros == numeroLimite) {
    numerosSorteados = [];
  }
  if (numerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    numerosSorteados.push(numeroEscolhido);
    console.log(numerosSorteados);
    return numeroEscolhido;
  }
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
