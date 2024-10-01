
//const Endereco = require('./Endereco')
const Pessoa = require('./Pessoa')

//const casa = new Endereco("Elisa", 55, "Piraja","Belo Horizonte", "MG")
const thiago = new Pessoa("Thiago","Elisa",55, "Pirajá", "Belo Horizonte")

console.log(thiago)
console.log(thiago.address.fullAddress())