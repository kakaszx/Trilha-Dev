console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const RioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`); //adicionando um item na lista
console.log("Destinos possiveis");
// console.log(salvador, saoPaulo, RioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); //removendo um item da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);
