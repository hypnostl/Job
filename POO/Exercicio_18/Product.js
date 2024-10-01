class Product{
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStorck = 0
    }
    addToStock(qtd){
        this.inStorck +=  qtd
        console.log(`O novo estoque é ${this.inStorck}`)
    }
    calculateDiscont(desconto){
        this.price = this.price * (1 - desconto/100)
        console.log(`O valor com desconto de ${desconto}% é de ${this.price}"`)
    }
}

const produto = new Product("Monitor 49", "Monitor HQ", 799, 100)
console.log(produto) 

produto.addToStock(150)
produto.calculateDiscont(50)