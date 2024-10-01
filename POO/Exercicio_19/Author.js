const Post = require("./Post")

class Author{
    constructor(nome)
    {this.nome = nome
        this.post = []
    }
   criarPost(titulo, corpo){
        const postagem = new Post(titulo,corpo,this)
        this.post.push(postagem)
        return postagem
        
    }
}

module.exports = Author




