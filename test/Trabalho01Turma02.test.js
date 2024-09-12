const Biblioteca = require('../src/Trabalho01Turma02');

describe('Testes da classe Banco', () => {
    let biblioteca;

    beforeEach(() => {
        biblioteca = new Biblioteca();
    })

    test('Adicionar um livro', () => {
        const vlivro = {
            id:1,
            titulo:"A Tristeza do Programador",
            autor:"Guilherme SD",
            genero:"Drama",
            ano:2024
        };

        biblioteca.adicionarLivro(vlivro);

        expect(biblioteca.livros).toContain(vlivro);
    });

    test('Remover um livro por id', () => {
        const vlivro = {
            id:1,
            titulo:"A Tristeza do Programador",
            autor:"Guilherme SD",
            genero:"Drama",
            ano:2024
        };

        biblioteca.adicionarLivro(vlivro);
        biblioteca.removerLivro(1);

        expect(biblioteca.livros).not.toContain(vlivro);
    });

    test('Buscar livro por id', () => {
        const vlivro = {
            id:1,
            titulo:"Testes Unitários COMPLEXOS",
            autor:"Leandro Ugioni",
            genero:"TERROR",
            ano:2024
        };
        let vres;

        biblioteca.adicionarLivro(vlivro);
        vres = biblioteca.buscarLivroPorId(1);

        expect(vres).toBe(vlivro);
    });

    test('Buscar livro por título', () => {
        const vlivro = {
            id:1,
            titulo:"China e Suas Aventuras",
            autor:"Guilherme SD",
            genero:"Aventura",
            ano:2024
        };
        let vres;

        biblioteca.adicionarLivro(vlivro);
        vres = biblioteca.buscarLivroPorTitulo("China e Suas Aventuras");

        expect(vres).toStrictEqual([vlivro]);
    });

    test('Listar livros', () => {
        const vlivro1 = {
            id:1,
            titulo:"Testes Unitários, Loop infinito",
            autor:"Guilherme SD",
            genero:"Suspense",
            ano:2024
        };
        const vlivro2 = {
            id:2,
            titulo:"Testes Unitários, O Fim?",
            autor:"Guilherme SD",
            genero:"Suspense",
            ano:2024
        };
        let vres;

        biblioteca.adicionarLivro(vlivro1);
        biblioteca.adicionarLivro(vlivro2);
        vres = biblioteca.listarLivros();

        expect(vres).toStrictEqual([vlivro1,vlivro2]);
    });

    test('Adicionar um membro', () => {
        const vmembro = {
            id:1,
            nome:"China"
        };

        biblioteca.adicionarMembro(vmembro);

        expect(biblioteca.membros).toContain(vmembro);
    });

    test('Remover um membro por id', () => {
        const vmembro = {
            id:1,
            nome:"China"
        };

        biblioteca.adicionarMembro(vmembro);
        biblioteca.removerMembro(1);

        expect(biblioteca.membros).not.toContain(vmembro);
    });

    test('Buscar membro por id', () => {
        const vmembro = {
            id:1,
            nome:"China"
        };

        biblioteca.adicionarMembro(vmembro);
        vres = biblioteca.buscarMembroPorId(1);

        expect(vres).toBe(vmembro);
    });

    test('Listar membros', () => {
        const vmembro1 = {
            id:1,
            nome:"China"
        };
        const vmembro2 = {
            id:2,
            nome:"China de Bigode"
        };
        let vres;

        biblioteca.adicionarMembro(vmembro1);
        biblioteca.adicionarMembro(vmembro2);
        vres = biblioteca.listarMembros();

        expect(vres).toStrictEqual([vmembro1,vmembro2]);
    });

    test('Emprestar um livro disponivel', () => {
        const vmembro = {
            id:1,
            nome:"China"
        };
        const vlivro = {
            id:1,
            titulo:"Chatgpt Faça um Teste Unitário",
            autor:"Guilherme SD",
            genero:"Suspense",
            ano:2024
        };
        biblioteca.adicionarLivro(vlivro);
        biblioteca.adicionarMembro(vmembro);
        var vres = biblioteca.emprestarLivro(1,1);

        expect(vres).toBe(true);
    });

    test('Emprestar um livro indisponivel', () => {
        const vmembro = {
            id:1,
            nome:"China"
        };
        const vlivro = {
            id:1,
            titulo:"Como Não Chorar Pos Prova",
            autor:"Guilherme SD",
            genero:"Suspense",
            ano:2024,
            emprestado:true
        };
        biblioteca.adicionarLivro(vlivro);
        biblioteca.adicionarMembro(vmembro);
        var vres = biblioteca.emprestarLivro(1,1);

        expect(vres).toBe(false);
    });

    test('Devolver livro emprestado', () => {
        const vlivro = {
            id:1,
            titulo:"Melhores Bares Criciúma",
            autor:"Guilherme SD",
            genero:"Aventura",
            ano:2024,
            emprestado:true
        };
        biblioteca.adicionarLivro(vlivro);
        var vres = biblioteca.devolverLivro(1);

        expect(vres).toBe(true);
    });

    test('Devolver livro disponivel', () => {
        const vlivro = {
            id:1,
            titulo:"Perdendo a Cabeça",
            autor:"Guilherme SD",
            genero:"Drama",
            ano:2024,
            emprestado:false
        };
        biblioteca.adicionarLivro(vlivro);
        var vres = biblioteca.devolverLivro(1);

        expect(vres).toBe(false);
    });

    test('Listar livros emprestados', () => {
        const vlivro1 = {
            id:1,
            titulo:"China no Egito!",
            autor:"Guilherme SD",
            genero:"Suspense",
            ano:2024,
            emprestado:true
        };
        const vlivro2 = {
            id:2,
            titulo:"China, o Retorno do Egito 2",
            autor:"Guilherme SD",
            genero:"Suspense",
            ano:2024,
            emprestado:true
        };
        const vlivro3 = {
            id:2,
            titulo:"China, Novamente no Egito 3",
            autor:"Guilherme SD",
            genero:"Suspense",
            ano:2024,
            emprestado:false
        };
        let vres;

        biblioteca.adicionarLivro(vlivro1);
        biblioteca.adicionarLivro(vlivro2);
        biblioteca.adicionarLivro(vlivro3);
        vres = biblioteca.listarLivrosEmprestados();

        expect(vres).toStrictEqual([vlivro1,vlivro2]);
    });

    test('Listar livros disponiveis', () => {
        const vlivro1 = {
            id:1,
            titulo:"China no Egito!",
            autor:"Guilherme SD",
            genero:"Suspense",
            ano:2024,
            emprestado:true
        };
        const vlivro2 = {
            id:2,
            titulo:"China, o Retorno do Egito 2",
            autor:"Guilherme SD",
            genero:"Suspense",
            ano:2024,
            emprestado:true
        };
        const vlivro3 = {
            id:2,
            titulo:"China, Novamente no Egito 3",
            autor:"Guilherme SD",
            genero:"Suspense",
            ano:2024,
            emprestado:false
        };
        let vres;

        biblioteca.adicionarLivro(vlivro1);
        biblioteca.adicionarLivro(vlivro2);
        biblioteca.adicionarLivro(vlivro3);
        vres = biblioteca.listarLivrosDisponiveis();

        expect(vres).toStrictEqual([vlivro3]);
    });

    test('Contar livros', () => {
        const vlivro1 = {
            id:1,
            titulo:"Aventuras de um Rapaz e Seu Teste Unitário",
            autor:"Guilherme SD",
            genero:"Ação",
            ano:2024
        };
        const vlivro2 = {
            id:2,
            titulo:"Testes Unitários e Guerras",
            autor:"Guilherme SD",
            genero:"Suspense",
            ano:2024
        };
        let vres;

        biblioteca.adicionarLivro(vlivro1);
        biblioteca.adicionarLivro(vlivro2);
        vres = biblioteca.contarLivros();

        expect(vres).toBe(2);
    });

    test('Contar membros', () => {
        const vmembro1 = {
            id:1,
            nome:"China"
        };
        const vmembro2 = {
            id:2,
            nome:"China de Capacete"
        };
        let vres;

        biblioteca.adicionarMembro(vmembro1);
        biblioteca.adicionarMembro(vmembro2);
        vres = biblioteca.contarMembros();

        expect(vres).toBe(2);
    });
});