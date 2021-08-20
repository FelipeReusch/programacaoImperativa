// Aula 14 - JSON
// 16/07/2021
// ex02json.js

let frutas = '{"Fruta": "banana", "Preço":8.50, "Tipo":["prata", "maça", "nanica"], "Origem":"Brasil"}';
// console.log(frutas);
// converter para JS
let frutasConvertidasJS = JSON.parse(frutas);
console.log(frutasConvertidasJS);
console.log(frutasConvertidasJS.Origem);

//converter para JSON
let frutasConvertidasJSON = JSON.stringify(frutasConvertidasJS);
console.log(frutasConvertidasJSON);