// Aula 14 - JSON
// 16/07/2021
// troca de dados - formulario para o servidor
// criacao e consumo - utilizando api's
// persistencia de dados em navegadores e servidores
// formato de dados  padrao da web atualmente
// json - nao suporta comentarios

let dadosJson = '{"nome":"Felipe","sobrenome":"Reusch", "idade":"27" }';
//console.log(dadosJson);
// JSON é um objeto nativo
// desserializaçao  = parsing 

let dadosConvertidosJS = JSON.parse(dadosJson); // objeto literal
//console.log(dadosConvertidosJS.nome);
//console.log(dadosConvertidosJS.nome.toUpperCase()); //chamar objetos de dentro

// serializacao cria um arquivo JSON
let objetoConvertidoJson = JSON.stringify(dadosConvertidosJS);
console.log(objetoConvertidoJson);

