class InvalidCreditsError extends Error {
    constructor(m) {
        super(m);
        this.name = "InvalidCreditsError";
    }
}

class Grade {
    nome
    crediti
    data
    voto
    lode
    constructor(n,c,d,v,l) {
        if (c < 0) {
            throw new InvalidCreditsError("credits cannot be negative");
        }
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

// if (require.main === module) { // ES Modules don't have require.main === module
//     try {
//         let voto = new Grade("l", -1, 1, 1, 1);
//         console.log(voto.toString());
//     } catch (e) {
//         console.log(e.name + ": " + e.message);
//     }
// }

export { Grade, InvalidCreditsError };