let categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];
console.log(categorias)

const codigosProdutos = new Array(101, 102, 103, 104);

const fornecedores = new Array('TechSupply', 'ModaExpress', 'SuperFoods');

const produtos = [
{ nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
{ nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
{ nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

console.log(codigosProdutos);
console.log(fornecedores);

console.log(categorias[0]);
categorias[1] = 'Calçados';

categorias.push('Livros');
categorias.pop();
categorias.unshift('Brinquedos');
categorias.shift();

console.log(categorias.length);
console.log(categorias.indexOf('Calçados'));
console.log(categorias.includes('Eletrônicos'));

for( let i = 0; i < categorias.length; i++) {
    console.log(categorias[i]);
};

for (categoria of categorias) {
    console.log(categoria);
}

console.log(produtos[0]);

const produtosBaratos = produtos.filter((produto) => {
    return produto.preco < 300;
});
console.log(produtosBaratos);

const precos = [50, 150, 200, 350, 400];
precosNovo = precos.filter((valor) => {
    return valor % 100 === 0;
});
console.log(precosNovo);

const quantidades = [2, 3, 5, 10];
const totalItens = quantidades.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);
console.log(totalItens);


const valorTotalEstoque = produtos.reduce((acumulador, produto) => {
  return acumulador + (produto.preco * produto.estoque);
}, 0);
console.log(valorTotalEstoque);

const precosOriginais = [100, 200, 300];
const novosPrecos = precosOriginais.map((preco) => {
    return preco * (preco * 0.9);
});

const nomesProdutos = produtos.map((produto) => {
    return produto.nome;
});
console.log(nomesProdutos);

const produtosOrdenados = produtos.slice();
produtosOrdenados.sort((um, dois) => um.preco - dois.preco);
console.log(produtosOrdenados);

const inventario = [
  { nome: "Teclado", estoque: 15 },
  { nome: "Mouse", estoque: 2 },
  { nome: "Headset", estoque: 10 }
];

const EstoqueCritico = inventario.some(produto => produto.estoque < 5);
console.log("Existe pelo menos um produto com estoque crítico?");
console.log(EstoqueCritico);
if (EstoqueCritico) {
  const produtoCritico = inventario.find(produto => produto.estoque < 5);
  console.log("Primeiro produto em situação crítica encontrado:");
  console.log(produtoCritico); 
};