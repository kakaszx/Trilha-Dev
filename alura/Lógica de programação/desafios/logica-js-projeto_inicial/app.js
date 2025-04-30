//desafio01 Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
// diaDaSemana = prompt('Qual é o dia da semana?');
// if (diaDaSemana == 'Sábado') {
//     alert('Bom fim de semana!');
// } else if (diaDaSemana == 'Domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// }

// desafio02 Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
// numero = prompt('Digite um positivo ou negativo');
// if (numero > 0) {
//     alert('Número positivo!');
// } else {
//     alert('Número negativo!');
// }

// desafio03 Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!" no console do navegador. Caso contrário, mostre "Tente novamente para ganhar.".
// pontuacao = prompt('Quantos monstros você matou?');
// if (pontuacao <= 10) {
//     alert('Você é um fraco!');
// }else if (pontuacao <= 20) {
//     alert('Você é mediano!');
// }else {
//     alert('Parabens! você é um fortinho');
// }

// desafio04 Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
// let saldo = 200; // Exemplo de saldo
// alert(`Seu saldo é de R$${saldo}.`);

//desafio05 Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
// let nome = prompt('Qual o seu nome?');
// alert(`Seja bem-vindo ${nome}`);

//deafio06 Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
//  let contador = 1;
//  while (contador <= 10) {
//      console.log(contador);
//      contador++;
//  }

//deafio07 Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador = 10;
// while (contador >= 0) {
//   console.log(contador);
//   contador--;
// }

//desafio08 Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.
//  let contador = prompt('Digite um número pra iniciar a contagem regressiva');

// while (contador >= 0) {
//   console.log(contador);
//   contador--;
// }

//desafio09 Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.
// let numero = prompt("Digite um número para a contagem progregressiva:");
// let contador = 0;

// while (contador <= numero) {
//     console.log(contador);
//     contador++
// }

//desafio10 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1 = 32
// let valor2 = 21
// let resultado = valor1 + valor2
// console.log(resultado)

//desafio11 Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
// let idade = prompt('Digite sua idade:');{
//     if (idade >= 18) {
//         alert('Você é maior de idade!');
//     } else {
//         alert('Você é menor de idade!');
//     }
// }

//desafio12 Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
// let numero = prompt('Coloque um Valor:');
// if (numero == 0) {
//     alert('O número é zero');
// } else if (numero > 0) {
//     alert('O número é positivo');
// } else {
//     alert('O número é negativo');
// }

//desafio13 Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
// let nota = prompt('Digite a nota do aluno:');
// if (nota >= 7) {
//     alert('Aluno aprovado!');
// }
// else if (nota >= 5) {
//     alert('Aluno em recuperação!');
// }
// else {
//     alert('Aluno reprovado!');
// }

//desafio14 Use o Math.ramdon para gerar qualquer número aleatório e exiba esse número no console.
// let numero = Math.random()
// console.log(numero)

///desafio15 Use o Math.ramdon para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
// let numero = parseInt(Math.random() * 10 + 1);
// console.log(numero);

//desafio16 Use o Math.ramdon para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
// let numero = parseInt(Math.random() * 1000 + 1);
// console.log(numero);

//desafio17 Crie uma função chamada dobro que receba um número como argumento e retorne o dobro desse número.
// function dobro (numero) {
//     return numero * 6;
// }
// console.log(dobro(2));

//desafio18 Crie uma função chamada media que receba três notas como argumentos e retorne a média dessas notas.
// function media (nota1, nota2, nota3) {
//     return (nota1 + nota2 + nota3) / 3;
// }
// console.log(media(5.25, 8.50, 9.00));

//desafio19 Crie uma função chamada numeroMaior que receba dois números como argumentos e retorne o maior deles.
// function numeroMaior (numero1, numero2) {
//     if (numero1 > numero2) {
//         return numero1;
//     } else {
//         return numero2;
//     }
// }
// console.log(numeroMaior(10, 5));

//desafio20 Crie uma função chamada numeroVezeseleMesmo que receba um número como argumento e retorne o número elevado ao quadrado.
// function numeroVezeseleMesmo (numero) {
//     return numero * numero;
// }
// console.log(numeroVezeseleMesmo(2));

//deasafio 21 Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// function imc (altura, peso) {
//     return peso / (altura * altura);
// }
// console.log(imc(1.71, 50));

//desafio 22 Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// function fatorial (numero) {
//     let fatorial = 1;
//     for (let i = 1; i <= numero; i++) {
//         fatorial *= i;
//     }
//     return fatorial;
// }
// console.log(fatorial(5));

//desafio 23 Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.
// function converterDolar(ValorEmDolar) {
//     let cotacaoDolar = 4.80;
//     let valorEmReais = valorEmDolar * cotacaoDolar;
//     return valorEmReais.toFixed(2);
// }

// let valorEmDolar = 50;
// let valorEmReias = converterDolar(valorEmDolar);
// console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReias} reais.`);

//desafio 24 Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// function calcularAreaPerimetro(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);
//     return {
//         area: area,
//         perimetro: perimetro
//     };
// }
// console.log(calcularAreaPerimetro(3, 5));

// desafio 25 Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// function calcularAreaCirculo(raio) {
//     let area = Math.PI * Math.pow(raio, 2);
//     let perimetro = 2 * Math.PI * raio;
//     return {
//         area: area,
//         perimetro: perimetro
//     };
// }
// console.log(calcularAreaCirculo(4));

// desafio 26 Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// function tabuada(numero) {
//     for (let i = 1; i <= 10; i++) {
//      let resultado = numero * i;
//      console.log(`${numero} x ${i} = ${resultado}`);
//     }
// }
// tabuada(5);

// desafio 27  Crie uma lista de linguagens de programação chamada & Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
// const linguagensProg = ["JavaScript", "C++", "Kotlin", "Python",];
// linguagensProg.push("Java","Ruby", "GoLang");

// console.log(LinguagensProg);

// desafio 28  Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
// const nomes = ["João", "Ana", "Carlos"];
// console.log(nomes[0]);

// desafio 29  Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
// const nomes = ["João", "Ana", "Carlos"];
// console.log(nomes[1]);

// desafio 30  Crie uma lista com 3 nomes e exiba no console apenas o ultimo elemento.
// const nomes = ["João", "Ana", "Carlos"];
// console.log(nomes[2]);

