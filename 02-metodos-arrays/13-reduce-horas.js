// EXERCÍCIO 13 - REDUCE - HORAS TRABALHADAS
// Considere as horas trabalhadas: [8, 7, 8, 6, 8].
// Utilize reduce() para calcular o total de horas trabalhadas na semana.
// Mostre o resultado.
//
// Escreva sua solução abaixo:

const Horas = [8,7,8,6,8]

const Total = Horas.reduce((Acumulador,Adicionador) => {
    return Acumulador + Adicionador
})

console.log(Total)