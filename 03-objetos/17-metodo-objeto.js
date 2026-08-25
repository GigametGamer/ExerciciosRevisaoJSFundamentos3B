// EXERCÍCIO 17 - MÉTODO DE OBJETO
// Crie um objeto circulo com a propriedade raio e um método calcularArea().
// O método deve retornar Math.PI * raio * raio.
// Mostre a área com duas casas decimais.
//
// Escreva sua solução abaixo:

let circulo = {
    raio: 5,

    calcularArea(){
        return Math.PI*this.raio*this.raio
    }
}


console.log(`O Raio do circulo é de ${circulo.raio}, e sua área é de ${circulo.calcularArea()}`)