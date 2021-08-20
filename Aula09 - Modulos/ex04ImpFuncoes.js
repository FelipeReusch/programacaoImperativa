// objetivo criem funções de cálculo e exportam
// fora modulo - exportacao

let calculo = require('./Modulos/Ex04ExpFuncoes'); //importacao

console.log(calculo.calculadora(2, 3, 'somar')); // chama o objeto e seu tipo 
console.log(calculo.calculadora(2, 3, 'multiplicar'));
console.log(calculo.calculadora(2, 3, 'subtrair'));
console.log(calculo.calculadora(2, 3, 'dividir'));