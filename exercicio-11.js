// Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

Pedidos = [
	{
		cliente: 'Ana Costa',
		produto: 'Notebook',
		quantidade: 1,
	},
  {
		cliente: 'Maria Souza',
		produto: 'MousePad',
		quantidade: 1,
	},
	{
		cliente: 'Pedro Lima',
		produto: 'Smartphone',
		quantidade: 2,
	},
	{
		cliente: 'Maria Souza',
		produto: 'Fone de Ouvido',
		quantidade: 5,
	},
  {
		cliente: 'Ana Costa',
		produto: 'Mouse',
		quantidade: 3,
	},
]

let totalPorCliente = {}

Pedidos.forEach((pedido) => {
  if (totalPorCliente[pedido.cliente] === undefined) {
    totalPorCliente[pedido.cliente] = 0
  }
  totalPorCliente[pedido.cliente] += pedido.quantidade
})

console.log(totalPorCliente)