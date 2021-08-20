
/* let curso = {
    nome: 'ctd',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listasEstudantes: [],
    adicionarAluno: function(...objetoAluno) {
        this.listasEstudantes.push(...objetoAluno)
    },
    aprovarAluno: function(aluno){
        let mediaDoAluno = aluno.calcularMedia()
        if 
        (aluno.faltas < this.faltasMaximas && mediaDoAluno >= this.notasAprovacao*1.1){
            return true;
        } else if (aluno.faltas == this.faltasMaximas && mediaDoAluno >= thi.notaAprovacao*1.1){
            return true;
        } else {
            return false;
        }
    },
    listarAprovacoes: function() {
        let listaAprovados = [];
        this.listasEstudantes.forEach(elemento => {
            listaDeAprovados.push(this.aprovarAluno(elemento))
        })
    }
} */

const Alunos = require('./alunosConstrutor')

function Curso(nomeCurso, notaAprovacao, faltasMaximas, listaEstudantes) 
{
    this.nomeCurso = nomeCurso;
    this.notaAprovacao = notaAprovacao;
    this.faltasMaximas = faltasMaximas;
    this.listaEstudantes = listaEstudantes;


    this.adicionaAlunos = (array) => this.listaEstudantes.push(array);


    this.vericaAprovacao = (aluno) => {
        console.log(aluno);
        console.log(aluno.calcularMedia());
        if (aluno.calcularMedia() >= this.notaAprovacao && aluno.faltas < this.faltasMaximas) {
            return true;
        }
        else if (aluno.calcularMedia() >= this.notaAprovacao * 1.1 && aluno.faltas === this.faltasMaximas) {
            return true;
        }
        else {
            return false
        }
    }
}
module.exports = Curso