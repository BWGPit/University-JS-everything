class Figura {
    area () {}
    perimetro () {}
}

class Triangolo extends Figura {
    constructor(l1, l2, l3) {
        super()
        this.l1 = l1
        this.l2 = l2
        this.l3 = l3
    }

    perimetro() {
        return this.l1+this.l2+this.l3
    }

    area() {
        let p = this.perimetro()/2
        return (p*(p-this.l1)*(p-this.l2)*(p-this.l3))**(1/2)
    }
}

class Rettangolo extends Figura {
    constructor(b, h) {
        super()
        this.b = b
        this.h = h
    }

    perimetro() {
        return 2*(this.b+this.h)
    }

    area() {
        return (this.b*this.h)
    }
}

class Quadrato extends Figura {
    constructor(l) {
        super()
        this.l = l
    }

    perimetro() {
        return 4*this.l
    }

    area() {
        return this.l**2
    }
}

class Cerchio extends Figura {
    constructor(r) {
        super()
        this.r = r
    }

    perimetro () {
        return 2*Math.PI*this.r
    }

    area() {
        return ((this.r)**2)*Math.PI
    }
}

class Piramide {
    constructor(fig, h) {
        this.fig = fig
        this.h = h
    }

    static ordina(...p) {
        let stuff = [...p]
        return stuff.sort((e, r) => e.volume()-r.volume())
    }

    volume() {
        return (this.fig.area()*this.h)/3
    }
}

function main() {
    let t = new Triangolo(4, 5, 6)
    let p = new Piramide(t, 5)
    let v = new Piramide(t, 4)
    let z = new Piramide(t, 7)
    console.log(Piramide.ordina(p, v, z))
}
main()