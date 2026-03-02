class Punto {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Vettore {
    constructor(angolo, magnitudine) {
        this.angolo = angolo
        this.magnitudine = magnitudine
    }
}

class Polilinea {
    constructor(...v) {
        this.vettori = [...v]
    }

    *vertici(origine) {
        yield "TODO: SCRIVERE"
    }
}