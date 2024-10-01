class login{
    #password
    #estoque
    constructor(user){
        this.email = user.email
        this.#password = user.password
    }
    veriricacao(){
        if(this.email === "thiago@gmail.com" && this.#password === "160988")
        {console.log(`"Login ok"${this.#password}`)}else{console.log("Erro de login")}
    }
}

const user ={
    email : "thiago@gmail.com",
    password: "160988"
}

const thiago = new login(user)
console.log(thiago.veriricacao())
console.log(user.password)