// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de jogos.
// Cada jogo deve possuir titulo, plataforma e classificacao.
// Percorra o array e mostre o título e a plataforma de cada jogo.
//
// Escreva sua solução abaixo:

const jogos = [
  { titulo: 'The Legend of Zelda', 
    plataforma: 'Nintendo Switch',
    classificacao: 'Livre' 
  },
  { titulo: 'Elden Ring', 
    plataforma: 'PlayStation 5', 
    classificacao: '16+' 
  },
  { titulo: 'Hollow Knight', 
    plataforma: 'PC', 
    classificacao: '18+' 
  }
];

jogos.forEach(jogo => {
  console.log(`Jogo: ${jogo.titulo} | Plataforma: ${jogo.plataforma}`);
});
