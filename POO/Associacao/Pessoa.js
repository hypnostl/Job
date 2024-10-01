const Address = require("./Endereco")

class Person {
    constructor(name, rua, numero, bairro, cidade) {
      this.name = name
      this.address = new Address(rua, numero,bairro,cidade)
    }
  }
  
  module.exports = Person