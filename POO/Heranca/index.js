class Property{
    constructor(area, preco)
    {
        this.area = area
        this.preco = preco
    }
    precoPorMetroQuadrado(){
        return this.preco / this.area
    }
}

class House extends Property{}

const terreno = new Property(200, 50000)
const casa = new House(150, 150000)

console.log(terreno)
console.log(casa.precoPorMetroQuadrado())

class Apartamento extends Property{
    constructor(numero, area, preco)
    {
        super(area,preco)
        this.numero = numero
    }
    selecionarAndar()
    {return this.numero.slice(0,-2)}
}

const apt = new Apartamento("201",80,150000)

console.log(apt)
console.log(apt.selecionarAndar())