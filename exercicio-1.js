// Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2020,
    cor: 'Preto'
}

for (let propriedade in carro) {
    console.log(carro[propriedade])
} 