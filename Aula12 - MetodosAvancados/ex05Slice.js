// Aula 12 - 06/07/2021
// ex05Slice.js
// slice = fatiar
/* O metodo array.slice(), retorna os elementos selecionados da matriz,
sintaxe: array.slice(inicio,fim)*/
                //0        //1       //2     //3     //4
const frutas = ['banana', 'laranja','limao','maca','manga'];
const citrica = frutas.slice(1,3);
console.log(citrica);
const caloricas = frutas.slice(4);
console.log(caloricas);