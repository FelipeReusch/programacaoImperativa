//Crie uma função, que após 5 segundos, dobre o resultado do número
// passado como parâmetro.

//Crie uma função assíncrona que irá receber um parâmetro x. Crie três
//variáveis: a, b e c dentro do corpo da função. Cada uma dessas variáveis
//receberá um await da função do passo anterior. Você deve passar como
//parâmetros dessa função os números 10, 20 e 30, respectivamente.

//Retorne a soma de todos esses elementos, inclusive o parâmetro da
//função assíncrona.


function dobrarNumero(numero){
    return new Promise(resolve => {
        setTimeout(() => resolve(numero *2), 5000)
        })
}

console.log("calculando nos dedos...");
dobrarNumero(10).then(numero =>console.log(numero));

async function funcaoAsync(x){
    let a = await dobrarNumero(10);
    let b = await dobrarNumero(20);
    let c = await dobrarNumero(30);
    return x + a + b + c
}

funcaoAsync(10).then(f=>console.log(f));