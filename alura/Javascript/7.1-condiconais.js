// minha versao

console.log(`Trabalhando com condicionais \n`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;
console.log("Destinos possiveis");
console.log(listaDeDestinos);

if ((idadeComprador >= 18 || estaAcompanhada == true)) {
  console.log("\nPermitido \n");
  listaDeDestinos.splice(1, 1); //removendo um item da lista
} else {
  console.log(" \nNão é maior de idade, não posso vender! \n");
  listaDeDestinos.splice(0); //removendo um item
}
console.log("Embarque:")
if (idadeComprador >= 18 || estaAcompanhada == true && temPassagemComprada) {
    console.log(`"Boa viagem!!, Aproveite o ${listaDeDestinos.splice(1,1)}`)
} else {
    console.log("Você não pode embarcar")
}

