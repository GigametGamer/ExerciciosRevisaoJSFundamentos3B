// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto viagem com destino, dias e valor.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:

const viagem = {
  destino: 'Paris',
  dias: 7,
  valor: 8500
};

const { destino, dias, valor } = viagem;

console.log(destino);
console.log(dias);    
console.log(valor);

console.log(`Viagem para ${destino} de ${dias} dias custará R$${valor}.`);