// Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

Vendas = [
	{
		produto: 'Camisa Palmeiras',
		quantidade: 6,
		valor: 230,
	},
	{
		produto: 'Camisa Detroit Lions',
		quantidade: 8,
		valor: 300,
	},
	{
		produto: 'Regata Boston Celtics',
		quantidade: 4,
		valor: 290,
	},
]

let valorVendas = 0

Vendas.forEach(venda => {
  valorVendas += venda.quantidade * venda.valor
});

console.log(`Valor total de vendas: R$ ${valorVendas.toFixed(2)}`)
