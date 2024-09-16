// Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

Clientes = [
	{
		nome: 'Tony Stark',
		idade: 48,
		cidade: 'Nova York',
	},
	{
		nome: 'Steve Rogers',
		idade: 105,
		cidade: 'Brooklyn',
	},
	{
		nome: 'Natasha Romanoff',
		idade: 35,
		cidade: 'Stalingrado',
	},
]

let contagemAcimaDe30 = 0

Clientes.forEach((cliente) => {
	if (cliente.idade > 30) {
		contagemAcimaDe30++
	}
})

console.log(`Número de clientes com mais de 30 anos: ${contagemAcimaDe30}`)
