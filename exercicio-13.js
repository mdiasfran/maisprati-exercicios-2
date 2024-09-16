// Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let carrinho = {
  itens: [
    {
      nome: 'Notebook',
      quantidade: 1,
      precoUnitario: 3000,
    },
    {
      nome: 'MousePad',
      quantidade: 1,
      precoUnitario: 20,
    },
    {
      nome: 'Smartphone',
      quantidade: 2,
      precoUnitario: 1500,
    },
    {
      nome: 'Fone de Ouvido',
      quantidade: 5,
      precoUnitario: 100,
    },
    {
      nome: 'Mouse',
      quantidade: 3,
      precoUnitario: 50,
    },
  ]
}

let total = 0

carrinho.itens.forEach((item) => {
  total += item.quantidade * item.precoUnitario
})

console.log(`O valor total do carrinho é R$ ${total.toFixed(2)}`)
