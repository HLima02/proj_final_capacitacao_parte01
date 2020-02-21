// ______ Classes de Produtos ______

let Produto = function(ident, nome, preco){
	this.ident = ident
	this.nome = nome
	this.preco = preco

	this.cartItem = function(qtde){
		this.qtde = qtde
		this.preco = preco * qtde
		let lista = [this.ident, this.nome, this.preco]

		console.log(`Preço: ${this.preco}`)
	}
}


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

// console.log(produto1)




