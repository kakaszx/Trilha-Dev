let valores = [8, 1, 7, 4, 2, 9]

valores.sort()// ORDEM CRESCENTE
console.log(valores)
/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/ //Descobrir o Conteúdo da Índice (Usando for) 

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}