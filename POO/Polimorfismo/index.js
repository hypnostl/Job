class vehicle {
    move(){
        console.log("Veiculo se movendo!")
    }
}


class Car extends vehicle{
    move(){console.log("O carro se move!")}
}

class Ship extends vehicle{
    move(){console.log("O navia está navegando!")}
}

class Aircraft extends vehicle{
    move(speed){console.log(`O avião está voando a ${speed} por hora `)}
}

const carro = new Car()
const nav = new Ship()
const jato = new Aircraft()



function start (vehicle)
{console.log("Iniciando ....")
    vehicle.move()
}

start(carro)
start(nav)
start(jato)
