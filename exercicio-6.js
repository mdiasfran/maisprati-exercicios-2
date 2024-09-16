// Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

Funcionarios = [
	{
		nome: 'Luke Skywalker',
		cargo: 'Jedi',
		salario: 5000,
	},
	{
		nome: 'Darth Vader',
		cargo: 'Sith Lord',
		salario: 8000,
	},
	{
		nome: 'Leia Organa',
		cargo: 'General',
		salario: 6000,
	},
]

function filtrarSalario(Funcionarios, valor) {
	for (let funcionario of Funcionarios) {
		if (funcionario.salario > valor) {
			console.log(funcionario)
		}
	}
}

filtrarSalario(Funcionarios, 5000) //alterar valor para testar
