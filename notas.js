const alunos = [
    { nome: 'Douglas', nota: 8 },
    { nome: 'Gabriela', nota: 7 },
    { nome: 'Matheus', nota: 5 },
    { nome: 'Igor', nota: 6 },
    { nome: 'Renan', nota: 9 },
];

function filtrarAlunos(aprovados) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunos(alunos);

console.log("Alunos aprovados:");
console.log(alunosAprovados);