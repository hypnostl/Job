class Reservation{
    constructor(guests, romm, days)
    {
        this.guests = guests
        this.romm = romm
        this.days= days
        this.total = days * Reservation.basefee
    }
    static basefee = 150

    static showBaseFee()
    {console.log(`Base fee is ${Reservation.basefee}`)}

    static get premiumFee()
    {return Reservation.basefee * 1.5}


}

Reservation.showBaseFee()

const r1 = new Reservation(5,201,5)
console.log(r1)

Reservation.basefee = 200
console.log(Reservation.premiumFee)