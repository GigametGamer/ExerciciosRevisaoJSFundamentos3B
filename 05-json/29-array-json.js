// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de tarefas contendo id, descricao e concluida.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

const jsonObjegtos = `[
  { "id": 1, "descricao": "Estudar JavaScript", "concluida": true },
  { "id": 2, "descricao": "Fazer exercícios de JSON", "concluida": false },
  { "id": 3, "descricao": "Revisar o código do projeto", "concluida": false }
]`;

const arrayDeTarefas = JSON.parse(jsonObjegtos);

console.log("Array convertido:", arrayDeTarefas);

