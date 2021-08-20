let Aluno = require('./export/alunosConstrutor');
let Curso = require('./export/cursoConstrutor');

let aluno1 = new Aluno ('Jose', 1, [9,10,10,9]);
console.log('faltas:',aluno1.faltas);
console.log('Faltas atualizadas:',aluno1.atualizarFaltas());
console.log('media:',aluno1.calcularMedia());

let curso1 = new Curso ('Java',8,2,['Felipe', 'Jose']);
curso1.adicionaAlunos(['Maria', 'Joao', 'Sandro']);
console.log('Lista de Alunos:',curso1.listaEstudantes);