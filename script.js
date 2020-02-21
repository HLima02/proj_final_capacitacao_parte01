// ______ Classes de Produtos ______

//Classe para criar objetos e calcular valor da quantidade 
let Produto = function(ident, nome, preco){
	this.ident = ident
	this.nome = nome
	this.preco = preco

	//metodo recebe a quantidade de produtos e calcula o valor final 
	this.cartItem = function(qtde){
		this.qtde = qtde
		this.preco = preco * qtde
		let lista = [this.ident, this.nome, this.preco]

		console.log(`Preço: ${this.preco}`)
	}
}

//classe que recebe o objeto como parametro e adiciona ou remove da lista de produtos
let Cart = function(produto){
	this.itens = []
	this.addItem = function(produto){
		this.itens.push(produto)
		console.log(this.itens)
		console.log('Item adicionado')
	}

	this.removeItem = function(produto){
		this.itens.pop()
		console.log(this.itens)
		console.log('Item removido')
	}
}



let produto1 = new Produto(101, 'Maçã', 2.00)
let cart = new Cart()






