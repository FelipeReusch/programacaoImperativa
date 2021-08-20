// Aula 12 - 06/07/2021
// ex03Reduce.js
// Reduce é um metodo que percorre o array e
// retorno um unico valor

const numeros = [1,2,-3,4,-5,0,7,8,9,19];
let resultado = numeros.reduce(
    function(totalizador,elemento) {
        return totalizador+elemento;
    }
)

console.log(resultado);

