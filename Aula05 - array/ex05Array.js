// Aula 05 - 11/06/2021
// Array - Shift

let cores = ["Azul", "Branco", "Vermelhos", "Verde"]
console.log(cores);
console.log(cores.length);
console.log("******Shift*******");

cores.shift(); //remove o primeiro elemento do Array

console.log(cores);
console.log(cores.length);

console.log("******unShift*******")
cores.unshift("violeta","amarelo"); //adiciona elementos na frente do Array

console.log(cores);
console.log(cores.length);