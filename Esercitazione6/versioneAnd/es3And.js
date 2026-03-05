class CreditoInsufficiente extends Error {
    constructor(message = "Credito insufficiente") {
        super(message);
        this.name = "CreditoInsufficiente";
    }
}

class Movimento {
    constructor(t, e, m, d) {
        this.tipo = t; // "R" ricarica oppure "S" spesa
        this.euro = e; // e>=0
        this.motivo = m; // stringa
        this.data = d; // date
    }
}

class Parcometro {
    #targa;
    #movimenti = [];
    #creditoCorrente = 0;

    constructor(t, c = 0) {
        if (typeof t != "string" || t === "") throw new TypeError("Deve essere stringa non vuota!");
        if (typeof c != "number" || c < 0) throw new TypeError("Deve essere numero non negativo!");
        this.#targa = t;
        this.#creditoCorrente = c;
    }

    get credito() {
        return this.#creditoCorrente;
    }

    static check(e, m) {
        if (typeof m != "string") throw new TypeError("Deve essere stringa!");
        if (!Number.isFinite(e) || e <= 0) throw new TypeError("Deve essere numero positivo!");
    }

    static #registri = new Set();

    static registro() {
        return new Set(this.#registri);
    }

    ricarica(euro, motivo) {
        Parcometro.check(euro, motivo);
        this.#creditoCorrente += euro;
        let mov = new Movimento("R", euro, motivo, new Date());
        this.#movimenti.push(mov);
        Parcometro.#registri.add([this, mov]);
    }

    paga(euro, motivo) {
        Parcometro.check(euro, motivo);
        if (euro > this.#creditoCorrente) throw new CreditoInsufficiente();
        this.#creditoCorrente -= euro;
        let mov = new Movimento("S", euro, motivo, new Date());
        this.#movimenti.push(mov);
        Parcometro.#registri.add([this, mov]);
    }

    storico(k = 5) {
        return [...this.#movimenti.slice(-k).map((x) => ({ ...x }))].reverse();
    }
}