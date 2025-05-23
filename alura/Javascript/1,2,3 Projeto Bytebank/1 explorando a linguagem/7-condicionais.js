console.log(`Trabalhando com condicionais \n`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 21;
const estaAcompanhada = false;
const temPassagemComprada = true;
console.log("Destinos possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(1, 1); //removendo um item da lista
// } else if (estaAcompanhada == true) {
//   console.log("Comprador esta acompanhado");
//   listaDeDestinos.splice(1, 1); //removendo um item
// } else {
//   console.log("Não é maior de idade, não posso vender");
//   listaDeDestinos.splice(0); //removendo um item
// }

if ((idadeComprador >= 18 || estaAcompanhada == true)) {
  console.log("Comprador maior de idade \n");
  listaDeDestinos.splice(1, 1); //removendo um item da lista
} else {
  console.log("Não é maior de idade, não posso vender! \n");
  listaDeDestinos.splice(0); //removendo um item
}
console.log("Embarque:")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!!")
} else {
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
