// Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
	titulo: 'O Morro dos Ventos Uivantes',
	autora: 'Emily Brontë',
	anoPublicacao: 1847,
	genero: 'Romance',
}

let editoraExiste = false

for (let propriedade in livro) {
	if (propriedade === 'editora') {
		console.log('A propriedade editora existe')
		editoraExiste = true
	}
}

if (!editoraExiste) {
	livro.editora = 'Editora Globo'
	console.log('A propriedade editora foi adicionada')
}

console.log(livro)
