// Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

Produtos = [
	{
		nome: 'Sabre de Luz',
		preco: 300,
		desconto: 10,
	},
	{
		nome: 'Capacete Stormtrooper',
		preco: 500,
		desconto: 15,
	},
	{
		nome: 'Millennium Falcon Lego',
		preco: 800,
		desconto: 20,
	},
]

Produtos.forEach((produto) => {
	produto.desconto = 10
	let descontoAplicado = produto.preco * (produto.desconto / 100)
	let precoFinal = produto.preco - descontoAplicado

	console.log(`O ${produto.nome} custa R$ ${precoFinal}`)
})
