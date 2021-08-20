const produtos =[
    {
        nome: "produto1",
        valor: 125,
        qualidade: 7,
        stautus: false
    },
    {
        nome: "produto2",
        valor: 1305,
        qualidade: 10,
        stautus: true
    },
    {
        nome: "produto3",
        valor: 758,
        qualidade: 6,
        stautus: true
    }
]

const carrinho = produtos.filter((produto) => 
{
    const valor = produto.valor
    const qualidade = produto.qualidade
    const status = produto.status

    const selecionado = (valor >= 482 && valor <= 1600) && (qualidade >= 6) && (
        status == true)
    return selecionado
})

carrinho.forEach((produto) => 
{
    console.log("Produto: ", produto.nome)
    console.log("Valor:", produto.valor)
    console.log("---------------------")
})

const total = carrinho.reduce((acumulador, produto) => 
{
    return acumulador.valor + produto.valor
})
console.log("Total: ", total)