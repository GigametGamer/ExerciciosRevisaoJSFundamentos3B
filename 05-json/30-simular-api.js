// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades status, quantidade e clientes.
// A propriedade clientes deve conter um array com dois objetos.
// Converta a resposta para JSON e depois novamente para objeto.
// Mostre o status e os clientes recebidos.
//
// Escreva sua solução abaixo:

const resposta = {
    status: 200,
    quantidade: 2,
    clientes: [
        { nome: "Carlos", idade: 28 },
        { nome: "Mariana", idade: 34 }
    ]
};

const respostaJSON = JSON.stringify(resposta);

const objetoFinal = JSON.parse(respostaJSON);

console.log("Status:", objetoFinal.status);
console.log("Clientes:", objetoFinal.clientes);
