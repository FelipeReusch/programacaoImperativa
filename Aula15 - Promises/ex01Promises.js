// Aula 15 - PROMISES  - 20/07/2021
// O que são Promises? Um objetivo JS que vincula: A produção do código 
// e o consumo dele.

function meuVerificador(resposta) {
    console.log(resposta);
}

let minhaPromessa = new Promise(
    function (Resolve, Reject) {
        let x = 1;
        if (x == 0) {
            Resolve("Tudo OK");
        } else {
            Reject("Deu Erro");
        }
    }

);

minhaPromessa.then(
    function (Resolve) {
        meuVerificador(Resolve)
    }).catch((Reject) => {
        console.log(Reject)
    });