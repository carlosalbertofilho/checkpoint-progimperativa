// Objetivos
// a.Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens.Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status

//  Qualidade de Produto ** deve ser um número que irá de 0 a 10.
//  Status ** deve ser um Booleano se o produto está disponível ou não.

let produtos = [{
        nomeProduto: 'Moto G9 Play',
        valorProduto: 1019.15,
        qualidadeProduto: 6,
        statusProduto: true,
    },
    {
        nomeProduto: 'Moto G30',
        valorProduto: 1359.15,
        qualiadeProduto: 7,
        statusProduto: true,
    },
    {
        nomeProduto: 'Moto G20',
        valorProduto: 1169.10,
        qualiadeProduto: 6,
        statusProduto: true,
    },
    {
        nomeProduto: 'Moto E7 Power',
        valorProduto: 765.15,
        qualiadeProduto: 5,
        statusProduto: false,
    },
    {
        nomeProduto: 'Moto G30',
        valorProduto: 1359.15,
        qualiadeProduto: 6,
        statusProduto: true,
    },
    {
        nomeProduto: 'Motorola Edge 20',
        valorProduto: 3599.10,
        qualiadeProduto: 9,
        statusProduto: true,
    },
    {
        nomeProduto: 'Motorola Edge 20 Lite',
        valorProduto: 2699.10,
        qualiadeProduto: 9,
        statusProduto: true,
    },
    {
        nomeProduto: 'Motorola Edge 20 ',
        valorProduto: 3999.0,
        qualiadeProduto: 9,
        statusProduto: true,
    },
    {
        nomeProduto: 'Motorola Edge 20 Pro',
        valorProduto: 4999.0,
        qualiadeProduto: 10,
        statusProduto: true,
    },
]


//  b.Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios.
//  Selecione todos os produtos que tenham:
//  Valor ** entre 482 e 1600;
//  Qualidade ** superior a 60;
//  Status ** como disponível;

let filtro = produtos.filter(lista => {
    return lista.valorProduto >= 482 && lista.valorProduto <= 1600 && lista.qualiadeProduto > 6 && lista.statusProduto == true
})

console.log(filtro)


// c. Por fim, é necessário exibir todos os itens presentes no * carrinho * com seus nomes e preços correspondentes, e no final um * valor total *, resultante da somatória de todos os produtos.

let carrinho = filtro.map(lista => {
    return `${lista.nomeProduto}: R$ ${lista.valorProduto}`
})

console.log(carrinho)


let valorTotal = filtro.reduce((soma, produtos) => {
    return soma += produtos.valorProduto
})
console.log(`O valor do carrinho R$ ${valorTotal}`)