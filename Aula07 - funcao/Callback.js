/* CALLBACK
function myDisplayer (some) {
    console.log(some);
}

function myCalculator (num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator (5, 5, myDisplayer);
*/

/* exemplo grupo */
 let somar = function(a, b){
     return a + b;
 }
 
 let subtrair = function(a, b){
     return a - b;
 }

 let calculadora = function(a, b, operacao){
    return console.log (operacao(a, b));
 }

 calculadora(3, 2, somar)
 calculadora(5, 4, subtrair)

