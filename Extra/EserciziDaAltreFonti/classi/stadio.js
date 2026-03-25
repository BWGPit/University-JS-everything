class SectorError extends Error {}
class Stadio {
    n; m; #postiPrenotati = new Map()
    constructor(n, m) {
        this.n = n
        this.m = m
        this.#postiPrenotati.set("ospiti", new Set())
        this.#postiPrenotati.set("casa", new Set())
    }
    prenota_posto(s, i) {
        if (s != "ospiti" && s != "casa") throw new SectorError("s non valida")
        if (this.#postiPrenotati.get(s).has(i)) return false
        this.#postiPrenotati.get(s).add(i)
        return true
    }
    posti_occupati(s) {
        if (s != "ospiti" && s != "casa") throw new SectorError("s non valida")
        return this.#postiPrenotati.get(s).size
    }
    is_empty() {return (this.posti_occupati("ospiti") + this.posti_occupati("casa") === 0)}
    svuota_stadio() {this.#postiPrenotati.set("ospiti", new Set()); this.#postiPrenotati.set("casa", new Set())}
}