// Aula 04 - 08/06/2021 
// condicional simples / composta       

let login = "bobesponja"    
let senha = 123 
let acesso = true

// if simples
/*
if (login == "silva") {
    console.log("acesso permitido")
} else {
    console.log("acesso negao")
}
*/

/*if composto

if (login == "bobesponja" && senha == 123 && acesso == true) {
    console.log("acesso permitido")
} else {
    console.log("acesso negado")
}
*/

function calcular (numA, numB, operacao)
{
    if  (operacao=='+'){
        return numA+numB; }
    if (operacao=='-'){
        return numA-numB; }
    if (operacao=='*'){ 
        return numA*numB; }
    if (operacao=='/' && numB!=0){
        return numA/numB; }
        else {
            return 'impossivel dividir!';
        }
}
let resultado = calcular ('10','0','/');
console.log('Resultado='+resultado);

for (i=1000; i>=100; i-=100) { console.log(i);}

let resta=0
for (i=5; i>=3; i--){
    resta=i-1;
    console.log(i+'patinhos foram passear, alem das montanhas para brincar, a mamae gritou: qua qua qua qua, mas só '+ resta +'patinhos voltaram de la;');
}