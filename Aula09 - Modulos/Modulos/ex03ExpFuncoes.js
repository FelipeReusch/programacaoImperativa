// objetivo criem funções de cálculo e exportam
// dentro modulo
//ex03ExpFuncoes.js


let somar = function (a, b) {
    return a + b
}

let subtrair = function (c, d){
    return c - d
}

let multiplicar = function (e, f){
    return e * f
}

let dividir = function (g, h){
    return g / h
}


module.exports = {somar, subtrair, multiplicar, dividir};

