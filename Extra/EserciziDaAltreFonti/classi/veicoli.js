class ErroreTarga extends Error {}
class ErroreCilindrata extends Error {}

class Veicolo {
    modello; targa
    constructor(modello, targa) {
        this.modello = modello
        this.targa = targa
    }
}

class Automobile extends Veicolo {
    constructor(modello, targa) {
        if (targa.length != 7) throw new ErroreTarga("Targa non valida")
        super(modello, targa)
    }
}

class Motoveicolo extends Veicolo {
    cilindrata
    constructor(modello, targa, cilindrata) {
        if (targa.length != 4) throw new ErroreTarga("Targa non valida")
        super(modello, targa)
        this.cilindrata = cilindrata
    }
}

class Motociclo extends Motoveicolo {
    constructor(m, t, c) {
        if (typeof c != "number" || isNaN(c) || !(isFinite(c)) || c <= 50) throw new ErroreCilindrata("Errore nella cilindrata")
        super(m, t, c)
    }
}

class Ciclomotore extends Motoveicolo {
    constructor(m, t, c) {
        if (typeof c != "number" || isNaN(c) || !(isFinite(c)) || c > 50 || c < 0) throw new ErroreCilindrata("Errore nella cilindrata")
        super(m, t, c)
    }
}

function minimoCilindrata(veicoli) {
    if (veicoli.length == 0) return undefined
    let [t, ...rest] = veicoli
    if (t instanceof Motoveicolo) {
        let chiamataRic = minimoCilindrata(rest)
        if (!chiamataRic) chiamataRic = Infinity
        return Math.min(t.cilindrata, chiamataRic)
    }
    return minimoCilindrata(rest)
}