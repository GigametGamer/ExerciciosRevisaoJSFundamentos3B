// EXERCÍCIO 27 - OBJETO PARA JSON
// Crie um objeto reserva com codigo, hospede e numeroNoites.
// Converta o objeto para JSON utilizando JSON.stringify()
// e mostre o resultado.
//
// Escreva sua solução abaixo:

const reserva = {
  codigo: "R123",
  hospede: "Carlos Souza",
  numeroNoites: 4
};

const JASON = JSON.stringify(reserva);

console.log(JASON);
