export class Produto{
    nome
    preco
    cor
    quantidade
    frete
    constructor(nome,preco,cor,quantidade,frete){
        this.nome = nome
        this.preco = preco
        this.cor = cor
        this.quantidade = quantidade
        this.frete = frete
    }
}

export let produtosCarrinho = []