class Acoount{
    #password
    #balance = 0
    constructor(user)
{
    this.email = user.email
    this.#password = user.password
    
}
    getBalance(email, password)
    {if (this.#autenticacao(email,password))
    {return this.#balance} else{return null}
    }

    #autenticacao(email, password)
    {return this.email === email && this.#password === password}

}

const user ={
    email: "thiago@gmail.com",
    password:"160988"
}

const conta = new Acoount(user)

console.log(conta)

console.log(conta.getBalance("thiago@gmail.om", "160988"))