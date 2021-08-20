/*Micro desafio - Passo 1
Crie um objeto aluno que tenha como atributos: 
nome (string), quantidade de faltas (number) e notas (array de números). 
Crie um construtor para ele e importe-o como o módulo aluno.*/

function Alunos(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

/*Micro desafio - Passo 2
Nosso objeto aluno terá o método 
calcularMedia que retorna a média de suas notas. 
Também terá um método chamado 
faltas, que simplesmente aumenta o número de faltas em 1.*/


    //métodos
    this.atualizaFaltas=()=>this.faltas+=1;
    this.calcularMedia=()=>((this.notas.reduce((total,el)=>total+el))/this.notas.length).toFixed(1);           
}
module.exports=Alunos;

/* 
Micro desafio - Passo 3 
Em um arquivo diferente, 
crie o objeto literal curso que tem como atributos: 
nome do curso (string), 
nota de aprovação (number), 
faltas máximas (number) 
e uma lista de estudantes
*/