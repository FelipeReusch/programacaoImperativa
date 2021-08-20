// Aula 04 - 08/06/2021 
// Calculadora

let somar = function (n1,n2){
    return n1+n2;
}
let subtrair = function(n1,n2){
    return n1-n2;
}
let multiplicar = function(n1,n2){
    return n1*n2;
}
let dividir = function(n1,n2) {
    // olhar para a variavel n2 e verificar de n2 == 0
    if(n2==0) {
        //executar se for true
        return "impossivel fazer divisao por 0"
    }else{
        return n1/n2;
    }
}
console.log(dividir(10,2))