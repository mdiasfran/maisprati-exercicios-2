// Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

Alunos = [
  {
    nome: 'Francisco',
    nota1: 5,
    nota2: 8
  },
  {
    nome: 'Raquel',
    nota1: 6,
    nota2: 6
  },
  {
    nome: 'Rafael',
    nota1: 9,
    nota2: 9
  },
]

for(let aluno of Alunos) {
  let media = (aluno.nota1 + aluno.nota2) / 2
  console.log(`O aluno(a) ${aluno.nome} tem média ${media}`)
}
