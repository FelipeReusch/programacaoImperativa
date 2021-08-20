// Aula 12 - 06/07/2021
// ex06Splice.js
// o metodo Splice serve para remover e adicionar elementos de um array
// array.splice(inicio,quantidade,item1,item2,...);
// quantidade opcional - numeros inteiros a eliminar
// itens: indica

                //0        //1       //2     //3     //4
const frutas = ['banana', 'laranja','limao','maca','manga'];
console.log(frutas);

frutas.splice(2,0,'mamao','kiwi');

console.log('lista com adicao...'+frutas);