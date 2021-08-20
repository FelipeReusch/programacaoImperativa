// objetivo criem funções de cálculo e exportam
// dentro modulo


const calculadora = (num1, num2, operacao) => {
        if (operacao == 'somar'){
        return num1 + num2
        } 
        else if (operacao == 'subtrair'){
            return num1 - num2
        }
        else if (operacao == 'multiplicar'){
            return num1 * num2
        }
        else if (operacao == 'dividir' && num2 == 0){
            return 'não é possível dividir'
        }
        else {
            return num1/num2
        }
}

module.exports = {calculadora};
