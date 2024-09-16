// Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

Estoque = [
  {
    produto: 'Notebook',
    quantidade: 10,
    minimo: 5,
  },
  {
    produto: 'MousePad',
    quantidade: 3,
    minimo: 10,
  },
  {
    produto: 'Smartphone',
    quantidade: 5,
    minimo: 15,
  },
  {
    produto: 'Fone de Ouvido',
    quantidade: 10,
    minimo: 5,
  },
  {
    produto: 'Mouse',
    quantidade: 4,
    minimo: 12,
  },
]

Estoque.forEach((produto) => {
  if (produto.quantidade < produto.minimo) {
    produto.quantidade *= 2
  }
})

console.log(Estoque)