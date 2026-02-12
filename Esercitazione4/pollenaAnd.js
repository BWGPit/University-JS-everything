class Figura {
    constructor() {}
    area() {}
    perimetro() {}
}

class Triangolo extends Figura {
    constructor(l1, l2, l3) {
        super();
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    
    area() {
        let s = (this.l1 + this.l2 + this.l3) / 2;
        return Math.sqrt(s * (s - this.l1) * (s - this.l2) * (s - this.l3));
    }

    perimetro() {
        return this.l1 + this.l2 + this.l3;
    }
}

class Rettangolo extends Figura {
    constructor(l1, l2) {
        super();
        this.l1 = l1;
        this.l2 = l2;
    }
    
    area() {
        return this.l1 * this.l2;
    }

    perimetro() {
        return 2 * (this.l1 + this.l2);
    }
}

class Quadrato extends Figura {
    constructor(l) {
        super();
        this.l = l;
    }

    area() {
        return this.l*l;
    }

    perimetro() {
        return this.l*4;
    }
}

class Cerchio extends Figura {
    constructor(r) {
        super();
        this.r = r;
    }

    area() {
        return Math.PI * this.r * this.r;
    }

    perimetro() {
        return 2 * Math.PI * this.r;
    }
}

class Pirmide {
    constructor(figura, altezza) {
        this.figura = figura;
        this.altezza = altezza;
    }

    volume() {
        return (this.figura.area() * this.altezza) / 3;
    }

    static ordina(...A) {
        return [...A].z((a, b) => a.volume() - b.volume());
    }
}
let c = new Cerchio(14);
console.log(c.area());
console.log(c.perimetro());

let pir = new Pirmide(c, 10);
let pir2 = new Pirmide(new Triangolo(3, 4, 5), 10);
console.log((Pirmide.ordina(pir, pir2).map(p => p.volume())));
