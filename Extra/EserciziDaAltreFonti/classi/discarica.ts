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
        this.buttati.set(typeof v, Number(this.buttati.get(typeof v)) + 1)
    }

    public svuota(t: string): Array<any> | undefined {
        if (!(["undefined", "boolean", "number", "bigint", "string", "symbol", "function", "object"].includes(t))) {
            throw new WrongTypeError("Wrong type")
        }
        let a: Array<any> | undefined = this.cestini.get(t)
        this.cestini.set(t, [])
        return a
    }

    public quanti(t: string): number {
        if (!(["undefined", "boolean", "number", "bigint", "string", "symbol", "function", "object"].includes(t))) {
            throw new WrongTypeError("Wrong type")
        }
        return Array(this.cestini.get(t)).length
    }

    public classi(): Set<string> {
        let s = new Set<string>()
        for (let x of (this.cestini.get("object") as Array<any>)) {
            console.log((x as object).constructor.name)
            s.add((x as object).constructor.name)
        }
        return s
    }
}

function mainfn(): void {
    let test: Discarica = new Discarica()
    test.butta("a")
    console.log(test.cestini)
    console.log(test.svuota("string"))
    console.log(test.cestini)
    console.log(test.quanti("string"))
    test.butta(new Discarica())
    test.butta(new Discarica())
    console.log(test.classi())
}

mainfn()