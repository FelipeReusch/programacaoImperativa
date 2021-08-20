/* 
Micro desafio - Passo 3 
Em um arquivo diferente, 
crie o objeto literal curso que tem como atributos: 
nome do curso (string), 
nota de aprovação (number), 
faltas máximas (number) 
e uma lista de estudantes
*/
const Alunos = require('./construtorAluno');

function Curso (nomeCurso, notaAprovacao, faltasMaximas, listaEstudantes)
{
    this.nomeCurso=nomeCurso;
    this.notaAprovacao=notaAprovacao;
    this.faltasMaximas=faltasMaximas;
    this.listaEstudantes=listaEstudantes;
    /*
    Micro desafio - Passo 4
Crie o método que permite 
adicionar alunos à lista do curso, 
ou seja, quando chamamos nosso método em nosso objeto curso, 
deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
    */
    this.adicionaAlunos=(array)=>this.listaEstudantes.push(array);
    

/*Micro desafio - Passo 5
Crie um método para o objeto curso que receba um aluno (como parâmetro) 
e retorne true se ele aprovou no curso ou false em caso de reprovação. 
Para ser aprovado, o aluno tem que ter 
uma média igual ou acima da nota de aprovação e ter menos faltas que faltas máximas. 
Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.*/

//verificar se média do aluno é maior ou igual à média do curso e faltas<faltas máximas.
    this.verificaAprovacao=(aluno)=>{
        console.log(aluno);
        console.log(aluno.calcularMedia());
         if (aluno.calcularMedia()>=this.notaAprovacao && aluno.faltas<this.faltasMaximas)
        {
            return true;
        }
        else if (aluno.calcularMedia()>=this.notaAprovacao*1.1 && aluno.faltas===this.faltasMaximas)
        {
            return true;
        }
        else {
            return false;
        }
    }
}
        
module.exports=Curso;