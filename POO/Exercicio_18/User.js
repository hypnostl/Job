class User{
    constructor(fullname, email, passworld){
        this.fullname = fullname
        this.email = email
        this.passworld = passworld
    }
    verificar(){
        if(this.email === "thiago@gmail.com" && this.passworld === 160988)
        {console.log("Login OK!!!")} else{console.log("Email ou senha incorreto!")}
    }
}

const usuario = new User("Thiago Lopes", "thiago@gmail.com",160988)
console.log(usuario)

usuario.verificar()
