// Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

Pessoas = [
	{
		nome: 'Gabriel',
		idade: 26,
		cidade: 'Santos',
	},
	{
		nome: 'João',
		idade: 37,
		cidade: 'Cabo Frio',
	},
	{
		nome: 'Patrícia',
		idade: 61,
		cidade: 'Salvador',
	},
]

for (let pessoa of Pessoas) {
	console.log(pessoa)
}
