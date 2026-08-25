// EXERCÍCIO 35 - POLIMORFISMO
// Crie uma classe Pagamento com o método processar().
// Crie as classes Pix e Cartao herdando de Pagamento.
// Sobrescreva processar() em cada classe com uma mensagem diferente.
// Coloque as formas de pagamento em um array e execute o método de cada uma.
//
// Escreva sua solução abaixo:

class Pagamento {
    processar() {
        console.log("Processando pagamento");
    }
}

class Pix extends Pagamento {
    processar() {
        console.log("Pagamento via Pix realizado com sucesso!");
    }
}

class Cartao extends Pagamento {
    processar() {
        console.log("Pagamento via Cartão aprovado!");
    }
}

const pagamentos = [new Pagamento(), new Pix(), new Cartao()];

pagamentos.forEach(p => p.processar());
