// Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

let transacoes = [
	{
		tipo: 'entrada',
		valor: 1000,
	},
	{
		tipo: 'saída',
		valor: 250,
	},
	{
		tipo: 'entrada',
		valor: 500,
	},
	{
		tipo: 'saída',
		valor: 150,
	},
	{
		tipo: 'entrada',
		valor: 200,
	},
]

let saldoFinal = 0

transacoes.forEach((transacao) => {
	if (transacao.tipo === 'entrada') {
		saldoFinal += transacao.valor
	} else if (transacao.tipo === 'saída') {
		saldoFinal -= transacao.valor
	}
})

console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`)
