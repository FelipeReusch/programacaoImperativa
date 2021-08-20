// aula 09 - Módulos
// dentro da pasta modulos
// Exportar mais de um objeto

let pessoa ={  //declara o objeto e delimita o escopo
    nome: 'Felipe', 
    idade: 27,
    sexo: 'masculino',
    filho: 0
}

let cachorro = { // declara o objeto e delimita o escopo
    nome1: 'Toddy',
    raca1: 'Labrador',
    sexo1: 'masculino',
    cor1: 'marrom'
}
module.exports={pessoa, cachorro}; //para exportar 