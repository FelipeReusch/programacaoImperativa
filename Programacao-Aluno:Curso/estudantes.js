/*Micro desafio - Passo 7
	Importe o módulo estudantes.js, 
    que contém uma lista de alunos, 
    dentro do arquivo que contém o objeto curso. 
    Substitua o conteúdo da propriedade lista de estudantes, 
    pela lista de estudantes do arquivo estudantes.js 
    e garanta que sigam funcionando todos os métodos corretamente. 
    (revisar que o arquivo tenha todos os métodos corretamente).
*/

const aluno = require('./construtorAluno');
let aluno1= [
    new aluno ('William',1,[10,8,9.5,9]),
    new aluno ('Danilo',1,[9,8.5,9,10]),
    //para testar o número de faltas iguais 
    //e a média com 10% acima da média do curso que é 8 então terá que ser maior que 8.8
    // new aluno ('Natália',2,[9,9,8.5,8]),
    new aluno ('Natália',2,[10,10,10,10]),
    new aluno ('Giulia',1,[7.5,8,4,9]),
    new aluno ('Sandro',3,[5,10,9.5,9])

]

module.exports=aluno1;
