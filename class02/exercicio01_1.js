const codigoProduto = "332020025";
var produto = "Notebook";

function exibirCategoria() {
    let categoria = "Eletronico";
    return categoria;
}

console.log(produto);
console.log(exibirCategoria());
console.log(codigoProduto);
console.log(`Produto: ${produto}. Categoria: ${exibirCategoria()}. Código do produto: ${codigoProduto}.`);