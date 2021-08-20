// Aula 12 - 06/07/2021
// ex01Map.js
// o map() é um metodo que cria uma nova matriz com os resultados
// da chamada de uma função para cada elemento matriz.

let letrasMinusculas = ['a','b','c','d'];

/*let letrasMaiusculas = letrasMinusculas.map(
    function maiuscula(elemento) {
        return elemento.toUpperCase();
    }
)*/

//com arrow function    
let letrasMaiusculas = letrasMinusculas.map(maiuscula=elemento=>elemento.toUpperCase());


console.log(letrasMinusculas);
console.log(letrasMaiusculas);
