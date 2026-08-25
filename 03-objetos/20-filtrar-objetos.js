// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const Funcionários = [
    {Nome: "Alex", Salario: 2000},
    {Nome: "Biel", Salario: 1500},
    {Nome: "DM", Salario: 580},
    {Nome: "Didi", Salario: 99966600},
    {Nome: "GAzborgh", Salario: 920837407860876},
]

const Menos3000 = Funcionários.filter(menos => menos.Salario >= 3000)

console.log(Menos3000);