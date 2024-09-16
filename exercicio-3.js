// Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let produto = {
	preco: 150,
	desconto: 10,
	estoque: 20,
	peso: 5,
	quantidadeVendida: 12,
}

function filtrarPropriedades(produto, valor) {
	let novoProduto = {}

	for (let propriedade in produto) {
		if (produto[propriedade] > valor) {
			novoProduto[propriedade] = produto[propriedade]
		}
	}

	return novoProduto
}

console.log(filtrarPropriedades(produto, 21)) //alterar valor para testar
