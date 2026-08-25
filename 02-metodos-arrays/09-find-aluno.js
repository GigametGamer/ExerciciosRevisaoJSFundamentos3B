// EXERCÍCIO 09 - FIND - ALUNO
// Crie um array de objetos com nome e matrícula de quatro alunos.
// Utilize find() para localizar o aluno com a matrícula 103.
// Mostre o aluno encontrado.
//
// Escreva sua solução abaixo:

const alunos = [
    {nome: "Bah", matricula: 1111111},
    {nome: "Beh", matricula: 2222222},
    {nome: "Bih", matricula: 103},
    {nome: "Boh", matricula: 3333333},
]

const aluno103 = alunos.find(matricula => matricula.matricula === 103)

console.log(aluno103.nome + "," + aluno103.matricula)