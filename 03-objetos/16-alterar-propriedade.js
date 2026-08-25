// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto ingresso com evento, preco e quantidade.
// Altere o preço e aumente a quantidade em duas unidades.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

let ingresso = {
    evento: "BGS",
    preco: 800,
    quantidade: 5,
};

console.log("Antes das alterações:", ingresso);


ingresso.preco = 700;
ingresso.quantidade += 2; 

console.log("Depois das alterações:", ingresso);

console.log(`Preço atual: R$${ingresso.preco} | Quantidade atual: ${ingresso.quantidade}`);
