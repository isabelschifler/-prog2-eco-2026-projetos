class CarrinhoDeCompras {
    #itens;

    constructor() {
        this.#itens = [];
    }

    adicionarItem(descricao, preco, quantidade) {
        if (quantidade <= 0 || preco <= 0) {
            console.log('Erro: valores invalidos');
            return;
        }
        this.#itens.push({ descricao, preco, quantidade });
        console.log(`Adicionado: ${descricao}`);
    }

    listarItens() {
        console.log('Carrinho:', this.#itens);
    }

    calcularTotal() {
        let total = 0;
        for (let item of this.#itens) {
            total += item.preco * item.quantidade;
        }
        return total;
    }
}

// saida na tela
const carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem('Camiseta R$', 50, 2);
carrinho.adicionarItem('Calça R$', 100, 1);

carrinho.listarItens(); // mostra no terminal
console.log('Total do carrinho:', carrinho.calcularTotal());
