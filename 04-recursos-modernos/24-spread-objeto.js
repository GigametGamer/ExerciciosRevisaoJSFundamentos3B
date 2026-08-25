// EXERCÍCIO 24 - SPREAD EM OBJETO
// Crie um objeto cliente com nome e telefone.
// Utilize Spread para criar um novo objeto que mantenha os dados
// e acrescente a propriedade fidelidade com valor "Ouro".
//
// Escreva sua solução abaixo:

const cliente = {
  nome: 'Felipe',
  telefone: '(11) 99999-8888'
};

const clienteFidelidade = {
  ...cliente,
  fidelidade: 'Ouro'
};

console.log(clienteFidelidade);
