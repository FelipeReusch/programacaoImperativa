// Aula 12 - 06/07/2021
// ex02filter.js
// Filter() é um metodo que retorno um novo array, 
// com os elementos que atendem uma condição

const numeros = [1,2,-3,4,-5,0,7,8,9,19];

const numerosMaiores = numeros.filter(elemento => elemento>0);

console.log(numerosMaiores);