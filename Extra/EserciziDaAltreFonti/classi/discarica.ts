class WrongTypeError extends Error {}

class Discarica {
    public cestini: Map<string, Array<any>>
    private buttati: Map<string, number>

    constructor() {
        this.cestini = new Map<string, Array<any>>()
        this.buttati = new Map<string, number>()
    }

    public butta(v: any): void {
        let a: Array<any> | undefined = this.cestini.get(typeof v)
        if (a === undefined) {
            this.cestini.set(typeof v, [])
            this.buttati.set(typeof v, 0)
        }
        this.cestini.get(typeof v)?.push(v)
        this.buttati.set(typeof v, this.buttati.get(typeof v) + 1)  // TODO: CAPIRE COME FARLO FUNZIONARE
    }

    public svuota(t: string): Array<any> | undefined {
        if (!(["undefined", "boolean", "number", "bigint", "string", "symbol", "function", "object"].includes(t))) {
            throw new WrongTypeError("Wrong type")
        }
        let a: Array<any> | undefined = this.cestini.get(t)
        this.cestini.set(t, [])
        return a
    }

    public quanti(t: string) {

    }
}

let test: Discarica = new Discarica()
test.butta("a")
console.log(test.cestini)