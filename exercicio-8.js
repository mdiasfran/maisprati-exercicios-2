// Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

Filmes = [
	{
		titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
		diretor: 'Peter Jackson',
		anoLancamento: 2001,
	},
	{
		titulo: 'Coringa',
		diretor: 'Todd Phillips',
		anoLancamento: 2019,
	},
	{
		titulo: 'Fragmentado',
		diretor: 'M. Night Shyamalan',
		anoLancamento: 2019,
	},
]

let titulos = []

Filmes.forEach(filme => {
  titulos.push(filme.titulo)
});

console.log(titulos)
