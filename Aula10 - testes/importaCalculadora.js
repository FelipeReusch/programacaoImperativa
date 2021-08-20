// importaCalculadora.js
// fora da pasta Modulo

let operacoes = require ('./modulos/exportaCalculadora');

function calcular(a,b,acao){
    switch (acao) {
        case '+': console.log(operacoes.somar(a,b));
        break;
        case '-': console.log(operacoes.subtrair(a,b));
        break;
        case '*': console.log(operacoes.multiplicar(a,b));
        break;
        case '/': console.log(operacoes.dividir(a,b));
        break;
        default: console.log("digite ma opcao valida")
    }
}
calcular (5,5,'+');