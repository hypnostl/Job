const Author = require("./Author");

const thiago = new Author("Thiago")
const postagem = thiago.criarPost("titulo","Corpo")
postagem.addComentario("Comenta")
postagem.addComentario("Comenta2")

console.log(thiago)
console.log(postagem)