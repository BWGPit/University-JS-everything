type Categoria = "adulto" | "minore"
type StatoPrenotazione = "aperta" | "chiusa"

class PrenotazioneChiusaError extends Error {}
class PrenotazionePienaError extends Error {}
class PasseggeroDuplicatoError extends Error {}

class Passeggero {
    #nome: string
    #categoria: Categoria
    constructor(nome: string, categoria: Categoria) {
        if (nome == "") {throw new TypeError("Stringa vuota passata come nome")}
        this.#nome = nome
        this.#categoria = categoria
    }
    get nome(): string {return this.#nome}
    get categoria(): Categoria {return this.#categoria}
}

class Prenotazione {
    #codice: string
    #posti: number
    #passeggeri: Passeggero[] = []
    #stato: StatoPrenotazione = "aperta"
    constructor(codice: string, posti: number) {
        if (codice == "" || posti <= 0) {throw new TypeError("Parametri non validi")}
        this.#codice = codice
        this.#posti = posti
    }
    get codice(): string {return this.#codice}
    get posti(): number {return this.#posti}
    get stato(): StatoPrenotazione {return this.#stato}

    public aggiungi(p: Passeggero): void {
        if (this.#stato == "chiusa") {throw new PrenotazioneChiusaError("Prenotazione chiusa")}
        if (this.#posti <= 0) {throw new PrenotazionePienaError("Prenotazione piena")}
        if (this.#passeggeri.find((v: Passeggero): boolean => (v.nome === p.nome && v.categoria === p.categoria))) {
            throw new PasseggeroDuplicatoError("Passeggero già a bordo")
        }
        this.#passeggeri.push(p)
        this.#posti--
    }

    public chiudi(): void {
        this.#stato = "chiusa"
    }

    public elenco(): Passeggero[] {
        return this.#passeggeri
    }

    public conteggioMinori(): number {
        return this.#passeggeri.reduce((e: number, r: Passeggero): number => (r.categoria=="minore")?e+1:e, 0)
    }

    public postiLiberi(): number {
        return this.#posti
    }
}

class PrenotazionePremium extends Prenotazione {
    #servizioExtra: string
    constructor(codice: string, posti: number, servizioExtra: string) {
        if (servizioExtra == "") {throw new TypeError("Parametri non validi")}
        super(codice, posti)
        this.#servizioExtra = servizioExtra
    }
    get servizioExtra(): string {return this.#servizioExtra}

    public elencoPremium(): {nome: string, extra: string}[] {
        return this.elenco().map((x: Passeggero): {nome: string, extra: string} => ({nome: x.nome, extra: this.#servizioExtra}))
    }
}

function chiudiPrenotazioniPiene(xs: Prenotazione[]): Prenotazione[] {
    let chiusi: Prenotazione[] = []
    for (let p of xs) {
        if (p.postiLiberi() == 0) {
            p.chiudi()
            chiusi.push(p)
        }
    }
    return chiusi
}