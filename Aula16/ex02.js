// Aula 16

// definindo a funcao chamada resolver... que faz a promessa de resolver em 2s
function resolverDepoisDe2Segundos(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

// defini a funcao chamada adicionar1 que vai retornar a soma do parametro passado
    async function adicionar1(x){
        var a = resolverDepoisDe2Segundos(10); // +a (chama a funcao resolver... com parametro 10)
        var b = resolverDepoisDe2Segundos(20); // +b (chama a funcao resolver... com parametro 20) nessa ordem
        return x + await a + await b;
    }

    // chama a funcao adicionar1  passando 10 como parametro (x). O Then é para promessa
    adicionar1(10).then(v => {
        console.log(v); //exibe 40 depois de 2 segundos.
    });

    // defini a funcao chamada adicionar2 que vai retornar a soma do parametro passado
    async function adicionar2(x) {
        var a = await resolverDepoisDe2Segundos(20);
        var b = await resolverDepoisDe2Segundos(30);
        return x + a + b;
    }

    // chama a funcao adicionar1  passando 10 como parametro (x). O Then é para promessa
    adicionar2(10).then(v => {
        console.log(v); //exibe 60 depois de 4 segundos.
    });
