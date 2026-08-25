// EXERCÍCIO 11 - SOME - VALORES NEGATIVOS
// Considere os saldos: [120, 50, -20, 300, 75].
// Utilize some() para verificar se existe algum saldo negativo.
// Mostre true ou false.
//
// Escreva sua solução abaixo:

const Saldos = [120, 50, -20, 300, 75];

const Soma = Saldos.some(negativo => negativo < 0)

console.log(Soma)