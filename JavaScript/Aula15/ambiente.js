let num = [5, 8, 2, 9, 3]

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[3])
num.push(1) //adicionando o valor na última posição do vetor
num.sort() //colocando os itens em ordem crescente
console.log(num)

for (var c = 0; c < num.length; c++){ //percorrendo o vetor de forma clássica
    console.log(num[c])
}

for (var n in num){ //percorrendo o vetor simplificadamente
    console.log(num[n])
}

console.log(num.indexOf(3)) 
/*procurando a posição do número 3, 
se retornar -1 o número não foi encontrado no vetor*/