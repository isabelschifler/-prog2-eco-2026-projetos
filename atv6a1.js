// SPRIT ANTIGO
// let p1 = {n: "Notebook", v: 2500, q: 5};
//let p2 = {n: "Mouse", v: 50, q: 10};
//let produtos = [p1, p2];
//let carrinho = [];

//function addCarrinho(prod, qtd) {
    //if(prod.q >= qtd) {
      //  carrinho.push({n: prod.n, v: prod.v, q: qtd});
      //  prod.q = prod.q - qtd;
      //  console.log(prod.n + " adicionado");
//  } else {
//      console.log("sem estoque");
//  }}
//function total() {
//    let soma = 0;
//    for(let i = 0; i < carrinho.length; i++) {
//       soma = soma + (carrinho[i].v * carrinho[i].q);
//    }
//    return soma;}

//addCarrinho(produtos[0], 2);
//addCarrinho(produtos[1], 1);
//console.log("Total: R$" + total());

// REESCREVENDO  
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
}

class Carrinho {
    constructor() {
        this.itens = [];
    }
    
    adicionar(produto, qtd) {
        if (produto.estoque < qtd) {
            console.log("Estoque insuficiente");
            return false;
        }
        
        produto.estoque -= qtd;
        this.itens.push({produto, qtd});
        console.log(`${qtd}x ${produto.nome} adicionado`);
        return true;
    }
    
    total() {
        let soma = 0;
        for (let item of this.itens) {
            soma += item.produto.preco * item.qtd;
        }
        return soma;
    }
    
    listar() {
        console.log("\n=== CARRINHO ===");
        for (let item of this.itens) {
            console.log(`${item.produto.nome} x${item.qtd} = R$ ${item.produto.preco * item.qtd}`);
        }
        console.log(`TOTAL: R$ ${this.total()}`);
    }
}

// Testando
let p1 = new Produto("Notebook", 2500, 5);
let p2 = new Produto("Mouse", 50, 10);

let carrinho = new Carrinho();

carrinho.adicionar(p1, 2);
carrinho.adicionar(p2, 1);
carrinho.listar();
console.log("Estoque notebook:", p1.estoque); // 3