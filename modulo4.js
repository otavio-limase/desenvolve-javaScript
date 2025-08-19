let estoque = [];

function adicionarLivro(titulo, autor, quantidade) {

  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      console.log(`O livro "${titulo}" já existe no estoque.`);
      return;
    }
  }

  estoque.push({ titulo, autor, quantidade });
  console.log(`Livro "${titulo}" adicionado com sucesso!`);
}

function removerLivro(titulo) {
  let index = -1;
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].titulo === titulo) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    estoque.splice(index, 1);
    console.log(`Livro "${titulo}" removido com sucesso!`);
  } else {
    console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
  }
}

function atualizarQuantidade(titulo, novaQuantidade) {
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      livro.quantidade = novaQuantidade;
      console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
      return;
    }
  }
  console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
}

function listarLivros() {
  if (estoque.length === 0) {
    console.log("O estoque está vazio.");
    return;
  }

  console.log("Livros no estoque:");
  for (let livro of estoque) {
    console.log(`- ${livro.titulo} | Autor: ${livro.autor} | Quantidade: ${livro.quantidade}`);
  }
}

// adicionarLivro("Dom Casmurro", "Machado de Assis", 5);
// adicionarLivro("O Cortiço", "Aluísio Azevedo", 3);
// listarLivros();

// atualizarQuantidade("Dom Casmurro", 10);
// removerLivro("O Cortiço");
// listarLivros();
