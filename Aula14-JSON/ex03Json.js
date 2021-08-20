// Aula 14 - JSON
// 16/07/2021
// ex03json.js


const fs = require('fs'); // file system 
let frutas = '{"Fruta": "banana", "Preço":8.50, "Tipo":["prata", "maça", "nanica"], "Origem":"Brasil"}';
// console.log(frutas);

fs.writeFileSync('teste.txt',frutas);

// ler o arquivo, converter para TXT
let lerJson = fs.readFileSync('teste.txt', 'utf-8'); // codificacao universal
//console.log(lerJson);

// converter objJSON para objJS
let converterLerJson = JSON.parse(lerJson);
console.log(converterLerJson);
