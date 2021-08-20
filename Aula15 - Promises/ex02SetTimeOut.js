// Aula 15 - PROMISES  - 20/07/2021
// ex02SetTimeOut
// Para demonstrar o uso de promessas, usaremos exemplos de retorno de chamada:
// Esperando por um tempo limite. 

console.log("Requisição em Andamento...");
setTimeout(
    function(){
        funcaoConectar("Server Conectado - OK");
    }, 2000);
    function funcaoConectar(value){
        console.log(value);
    }