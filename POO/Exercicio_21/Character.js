class Character{
    constructor(nome, PV, PA, PD)
    {
        this.nome = nome
        this.PV = PV
        this.PA = PA
        this.PD = PD
    }
    ATK(per){
        if(this.PA - per.PD < 0)
        {console.log(`Os pontos de ataque do ${this.nome} é ${this.PA} menor que a defesa do ${per.nome} que é ${per.PD}`)}
        else{
           per.PV =  per.PV - (this.PA - per.PD)
    
        console.log(per)
    }
    }

}

const P1 = new Character("Gad", 100,50,40)
const P2 = new Character("Fad",100,50,20)

P1.ATK(P2)
