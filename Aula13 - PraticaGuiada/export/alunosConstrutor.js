// 13/08/2021

/*PASSO 1 - Crie um objeto aluno que tenha como atributos: 
nome (string), quantidade de faltas (number) e notas (array de números). 
Crie um construtor para ele e importe-o como o módulo aluno.*/

/*class aluno {
    constructor(nome, faltas, notas) {
        this.nome = nome
        this.faltas = faltas
        this.notas = notas

        this.calcularMedia = function calc() {
            const resultado = (this.notas.reduce((sum, n) => sum += n, 0)) / this.notas.length
            return `o aluno ${nome} possui uma média de ${resultado}`
        }
        this.adicFaltas = function falt() {
            this.faltas++
            return `o aluno ${nome} possui ${this.faltas} faltas e possui média de`
        }
        this.resumo = function (callback, callback2) {
            callback(calc)
            callback2(falt)
            return `o aluno ${nome} possui ${this.faltas} faltas e tem média de ${resultado}`

        }

    }
}*/

/*const felipe = new aluno ('Felipe',10,[7,8,9,5,10])
console.log(felipe.calcularMedia())*/



// andrade
// function aluno(nome, faltas, notas){
//    this.nome=nome,
//    this.faltas=faltas,
//    this.notas=notas,
//    this.media=() => this.notas.reduce
//}
// 

let Aluno = function(nome,faltas,notas){
    this.nome=nome,
    this.faltas=faltas,
    this.notas=notas,
    this.atualizarFaltas=()=>this.faltas+=1;
    this.calcularMedia=()=>((this.notas.reduce((acumulador,elemento)=>acumulador+elemento))/this.notas.length).toFixed(1);
    };

    
module.exports = Aluno;


