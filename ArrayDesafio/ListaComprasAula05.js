// Programacao Imperativa - Desafio Array - Lista de Compras
// 11/06/2021

let listaCompras = ["ovo", "salada", "frango", "banana", "maca"]
console.log(listaCompras);

console.log("******Push*******");
listaCompras.push("cebola", "tomate"); //adicionar elemento no final
console.log(listaCompras);

console.log("******Shift*******");
listaCompras.shift(); //remove o primeiro elemento do Array
console.log(listaCompras);

console.log("******unShift*******")
listaCompras.unshift("picanha"); //adiciona elementos na frente do Array
console.log(listaCompras);

console.log("******Pop*******");
listaCompras.pop(); //remove o ultimo elemento
console.log(listaCompras);

console.log("******Join*******");
let separadorPorTraco = listaCompras.join("-") //junta elementos do Array
console.log(separadorPorTraco);