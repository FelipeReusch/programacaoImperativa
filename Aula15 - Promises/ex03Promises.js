// Aula 15 - PROMISES  - 20/07/2021
// ex03Promises
// Para demonstrar o uso de promessas, usaremos exemplos de retorno de chamada:
// Esperando por um tempo limite. 
// shift + alt + f identar o código

// host
let dadosConexaoJson = '{"server":"192.168.0.1", "login":"admin","senha":123}';
//console.log(dadosConexaoJson);

// convertendo para JS
let dadosConexaoJS = JSON.parse(dadosConexaoJson);
//console.log(dadosConexaoJS);

//console.log(dadosConexaoJS.server);
//console.log(dadosConexaoJS.login);
//console.log(dadosConexaoJS.senha);

// usuario 
let txtServer = "192.168.0.1";
let txtLogin = "admin";
let txtSenha = 123;

let conexao = false;

if (dadosConexaoJS.server == txtServer && dadosConexaoJS.login == txtLogin && dadosConexaoJS.senha == txtSenha) {
    conexao = true;
} else {
    conexao = false;
}

// Criacao da Promise

const promessa = new Promise((resolve, reject) => {
    console.log("Requisição em andamento...")
    // Criacao de um Delay de 3 segundos
    setTimeout(() => {
        // verificamos se a promise dara erro ou não
        if (conexao == false) reject("Acesso negado - Server não conectado")
        else resolve(JSON.stringify({
            vserver: "192.168.0.1",
            vlogin: "admin",
            vsenha: 123
        }))
    }, 3000)
})
promessa.then((resolve) => { // consumo/utilizacao do retorno da promise
    const dados = JSON.parse(resolve); // converter para JS
    console.log(dados);
}).catch((reject) => {
    console.log(reject);
})