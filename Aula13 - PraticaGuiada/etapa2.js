let Curso = require('./export/cursoConstrutor');
let estudantes = require('./estudantesCursos');

let curso1 = new Curso ('Java',8,2,['Felipe', 'Jose']);

for (let i=0; i < estudantes.length; i++){
    if(curso1.vericaAprovacao(estudantes[i])==true){
        console.log('Aluno', estudantes[i].nome, 'esta aprovado');
    }
    else {
        console.log('Aluno', estudantes[i].nome,'esta reprovado');
    }
}