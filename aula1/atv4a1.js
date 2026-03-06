// Classe Livro
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }
}

// Classe ControleEmprestimos
class ControleEmprestimos {
    constructor() {
        this.emprestimos = [];
    }
    
    listarAtivos() {
        return this.emprestimos;
    }
}

// Classe UsuarioBiblioteca
class UsuarioBiblioteca {
    constructor(nome) {
        this.nome = nome;
        this._meusLivros = [];  // lista privada
        this.controle = new ControleEmprestimos();
    }
    
    // Getter para acessar a lista de forma controlada
    get livrosEmprestados() {
        return [...this._meusLivros];  // retorna cópia
    }
    
    emprestar(livro) {
        // Verifica se o livro já está com o usuário
        for (let i = 0; i < this._meusLivros.length; i++) {
            if (this._meusLivros[i] === livro) {
                console.log("Você já tem este livro!");
                return false;
            }
        }
        
       
        if (livro.disponivel) {
            this._meusLivros.push(livro);
            livro.disponivel = false;
            this.controle.emprestimos.push({
                usuario: this.nome,
                livro: livro.titulo
            });
            console.log("Livro emprestado com sucesso!");
            return true;
        } else {
            console.log("Livro não disponível!");
            return false;
        }
    }
    
    devolver(livro) {
        for (let i = 0; i < this._meusLivros.length; i++) {
            if (this._meusLivros[i] === livro) {
                this._meusLivros.splice(i, 1);
                livro.disponivel = true;
                
                
                for (let j = 0; j < this.controle.emprestimos.length; j++) {
                    if (this.controle.emprestimos[j].livro === livro.titulo) {
                        this.controle.emprestimos.splice(j, 1);
                        break;
                    }
                }
                
                console.log("Livro devolvido!");
                return true;
            }
        }
        console.log("Você não tem este livro!");
        return false;
    }
}

// Testando o sistema
console.log("=== BIBLIOTECA ===\n");


let livro1 = new Livro("O Lobo", "Machado de Assis");
let livro2 = new Livro("1984", "George");
let usuario = new UsuarioBiblioteca("João");


usuario.emprestar(livro1); 
usuario.emprestar(livro1);  //  ja esta emprestado
usuario.emprestar(livro2);  


console.log("\nEmpréstimos ativos:");
let ativos = usuario.controle.listarAtivos();
for (let i = 0; i < ativos.length; i++) {
    console.log(ativos[i].usuario + " - " + ativos[i].livro);
}


console.log("\nDevolvendo livro:");
usuario.devolver(livro1);


console.log("\nEmpréstimos ativos após devolução:");
ativos = usuario.controle.listarAtivos();
for (let i = 0; i < ativos.length; i++) {
    console.log(ativos[i].usuario + " - " + ativos[i].livro);
}
