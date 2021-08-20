let curso = require('./construtorCurso');
let estudantes = require('./estudantes');


let curso1 = new curso('Javascript', 8, 2, ['William', 'Danilo']);

/*Micro desafio - Passo 6
    Crie um método para o objeto curso que 
    percorra a lista de estudantes e 
    retorne um array de booleanos com os resultados 
    se os alunos aprovaram ou não.
*/

//verificando se a lista de estudantes está aprovada ou reprovada
//agora não estamos mais trabalhando com o objeto aluno1, tivemos que trocar por estudantes
for (let i = 0; i < estudantes.length; i++) {
    if (curso1.verificaAprovacao(estudantes[i]) == true) {
        console.log('Aluno', estudantes[i].nome, 'está APROVADO!');
    }
    else {
        console.log('Aluno', estudantes[i].nome, 'está REPROVADO!');
    }
}
/*Micro desafio - Passo 7
	Importe o módulo estudantes.js, 
    que contém uma lista de alunos, 
    dentro do arquivo que contém o objeto curso. 
    Substitua o conteúdo da propriedade lista de estudantes, 
    pela lista de estudantes do arquivo estudantes.js 
    e garanta que sigam funcionando todos os métodos corretamente. 
    (revisar que o arquivo tenha todos os métodos corretamente).
*/



