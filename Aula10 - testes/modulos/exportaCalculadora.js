// Aula 10 - 29/06/2021

module.exports = {
    somar:(a,b) => {
        if(typeof a== 'number' && typeof b == 'number') { //só vai acontecer se as variaveis forem números 
            return a + b;
        } 
        else { return 'favor informar números'}
    },
    subtrair: (a,b) => a - b,
    multiplicar: (a,b) => a * b,
    dividir: (a,b) => {
        if(b != 0) { // diferente é !=
            return a/b; 
        } else { return 'impossivel dividir por 0'}
    }
}
