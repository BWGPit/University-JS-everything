class Grade {
    nome
    crediti
    data
    voto
    lode
    constructor(n,c,d,v,l) {
        this.nome = n;
        this.crediti = c;
        this.data = d;
        this.voto = v;
        this.lode = l;
    }

    equals(g) {
        return g.nome === this.nome &&
        g.crediti === this.crediti &&
        g.data === this.data &&
        g.voto === this.voto &&
        g.lode === this.lode;
    }

    toString() {
        return "nome: " + this.nome + " crediti: " + this.crediti + " data: " + this.data + " voto: " + this.voto + " lode: " + this.lode;
    }
}

let voto = new Grade("l",1,1,1,1);
let voto2 = new Grade("l",2,2,2,2);
console.log(voto.equals(voto2)); // true
console.log(voto2.toString());

export { Grade };