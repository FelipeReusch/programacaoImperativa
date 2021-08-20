// Aula 04 - 08/06/2021 
// Exercicio podeSubir


function podesubir(altura,acompanhada){
    if (altura >= 1.40 && altura < 2.0){
        console.log("acesso autorizado")
        return true
    } else if(altura >= 1.20 && altura < 1.40 && acompanhada== "sim"){
        console.log("acesso autorizado com acompanhante")
        return true
    } 
    else{
        console.log("acesso negado")
        return false
    }
}

console.log(podesubir(1.30,"nao"))
console.log(podesubir(1.80,"nao"))
console.log(podesubir(1.30,"sim"))