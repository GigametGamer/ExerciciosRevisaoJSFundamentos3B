// EXERCÍCIO 07 - MAP - BÔNUS DE PONTUAÇÃO
// Considere o array: [20, 35, 40, 55].
// Utilize map() para criar um novo array adicionando 5 pontos a cada valor.
// Mostre o array original e o novo array.
//
// Escreva sua solução abaixo:

const numeros = [20, 35, 40, 55]

const numeros2 = numeros.map(numeros => numeros + 5)

console.log(numeros)

console.log(numeros2)