const coment = require("./Comment");


class Post {
  constructor(titulo, corpo, autor) {
    this.titulo = titulo;
    this.corpo = corpo;
    this.autor = autor;
    this.comentatios = [];
    this.creatAt = new Date();
  }
  addComentario(conteudo) {
    this.comentatios.push(new coment(conteudo));
  }
}
module.exports = Post




