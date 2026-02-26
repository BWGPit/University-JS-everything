/*
Svolgimento della quarta prova - non ancora corretto - Pietro T.
NOTA: prova in itinere svolta il 2026/02/12. La pubblicazione di questo script avviene dopo la fine del tempo della prova di una settimana.
*/

class FinestraLab extends Array {
    #pmaxc;  // Dichiaro la proprietà privata
    constructor() {
        super()
        this.#pmaxc = 10 // Il valore di #maxc di default è 10
    }

    // Getter per maxc
    get maxc () {
        return this.#pmaxc
    }
    // Setter per maxc
    set maxc (m) {
        this.#pmaxc = m
        while (this.length > m) {
            this.shift()
        }
    }

    // Uso lo spread perché si possono inserire più di un valore per volta
    push(...e) {
        let elementi = [...e]
        for (let elemento of elementi) {
            let indiceElemento = this.length    // L'elemento in posizione .length-1 è l'ultimo dell'array prima di questo
            if (indiceElemento < this.#pmaxc) {
                this[indiceElemento] = elemento
            }
            else {
                while (this.length > this.#pmaxc-1) {
                    this.shift()    // Rimuove il primo
                }
                console.log(this)
                this[this.length] = elemento
            }
        }
        return this.length  // La funzione push() restituisce la lunghezza dell'array
    }

    // "Per evitare operazioni ambigue: le chiamate a pop() e splice()
    // su un'istanza di FinestraLab non devono avere nessun effetto."
    // Faccio override di pop() e splice()
    pop() {return null}
    splice() {return null}
}

class MediaMobile {
    #k
    #listaI
    constructor(k, ...i) {
        this.#k = k
        this.#listaI = [...i]
    }

    *succ() {
        let indice = 1
        while (true) {
            let valore
            
            // Controllo l'indice rispetto a k
            if (indice <= this.#k) {
                valore = this.#listaI[indice-1] // L'array è indicizzato in 0
            }
            else {
                valore = Math.floor(
                    (1/this.#k)*
                    (this.#listaI.reduce((a, c) => a+c))    // Uso reduce() per la sommatoria, come visto a lezione
                )
                // Dopo il calcolo del valore (a_indice), rimuovo in testa e aggiungo a_indice in coda
                this.#listaI.shift()
                this.#listaI.push(valore)
            }

            indice++    // Incremento l'indice
            yield valore
        }
    }
}

class INode {
    a
    b
    left = null
    right = null

    constructor([a, b]) {
        this.a = a
        this.b = b
    }

    add(n) {    // Dove n è istanza di INode
        if (this.a < n.a || (this.a == n.a && this.b < n.b)) {
            // Il nodo n in input è maggiore di questo nodo
            if (!this.right) {
                this.right = n
            }
            else {
                this.right.add(n)   // Chiamo ricorsivamente sul figlio destro
            }
        }
        else {
            // Il nodo n in input è minore di questo nodo
            // (segue la stessa logica del blocco if, ma applicata al figlio sinistro)
            if (!this.left) {
                this.left = n
            }
            else {
                this.left.add(n)
            }
        }
    }

    findValue(x) {
        if (this.a <= x && x <= this.b) {
            return this
        }
        // Cerco sia a sinistra sia a destra: è come una visita anticipata
        let sx = this.left?this.left.findValue(x):null
        let dx = this.right?this.right.findValue(x):null
        if (sx) return sx
        else return dx  // Anche se fosse null, dovrei comunque restituire null
    }

    get maxd() {
        // Algoritmo ricorsivo analogo a quello studiato a Fondamenti/Prog. e Algo.
        if (!this.left && !this.right) {
            return 1
        }
        else {
            // sx e dx: se uno dei due è vuoto, la sua profondità vale 0 (siccome la profondità del nodo singolo è qui definita 1)
            let sx = this.left?this.left.maxd:0
            let dx = this.right?this.right.maxd:0
            return 1 + Math.max(sx, dx)
        }
    }

    get mind() {
        // Analogo a maxd
        if (!this.left && !this.right) {
            return 1
        }
        else {
            let sx = this.left?this.left.maxd:0
            let dx = this.right?this.right.maxd:0
            return 1 + Math.min(sx, dx)
        }
    }
}

class YetAnotherAlbero {
    root
    size

    constructor() {
        this.root = null
        this.size = 0
    }

    addInterval([a, b]) {
        if (!this.root) {
            this.root = new INode([a, b])   // Se l'albero è vuoto, il nuovo nodo è la radice
        }
        else {
            this.root.add(new INode([a, b]))    // Uso l'add() precedentemente definito con il nuovo nodo
        }
        this.size++ // Incremento il campo size
    }
}

// L'idea è di rappresentare il grafo della mappa delle stazioni con le stazioni come nodi
// e i binari come archi.

class Stazione {
    nome
    adiacenti
    constructor(nome) {
        this.nome = nome
        this.adiacenti = {} // Dizionario di adiacenza: conterrà istanze di Stazione indicizzate dai loro nomi
    }

    raggiungi(v, visitati=[this.nome]) {
        // Marco i visitati per non incorrere in cicli
        // Restituisce il percorso da sé a v se presente
        let listaAdiacenza = Object.keys(this.adiacenti)
        if (this.adiacenti[v]) {
            return [...visitati, v]
        }
        else if (listaAdiacenza.length > 0) {
            for (let n of listaAdiacenza) {
                if (!(visitati.includes(n))) {
                    let chiamata = this.adiacenti[n].raggiungi(v, [...visitati, n])
                    if (chiamata != null) return chiamata
                }
            }
        }
        else return null
    }
}

class MapStation {
    size
    #nodi
    constructor() {
        this.size = 0
        this.#nodi = {} // Nodi del grafo mappati alla loro istanza; gli archi saranno salvati nella classe Stazione
    }

    binario(u, v) {
        // Controllo se entrambi sono nel grafo e, in caso negativo, li aggiungo
        if (!(this.#nodi[u])) {
            this.#nodi[u] = new Stazione(u)
            this.size++
        }
        if (!(this.#nodi[v])) {
            this.#nodi[v] = new Stazione(v)
            this.size++
        }

        // Aggiungo il collegamento tra i due nodi
        this.#nodi[u].adiacenti[v] = this.#nodi[v]
        this.#nodi[v].adiacenti[u] = this.#nodi[u]
    }

    diretto(u, v) {
        // Essendo i collegamenti bidirezionali (il grafo non è orientato),
        // basta controllare l'adiacenza rispetto a uno dei due, poiché, per come ho definito
        // binario(), necessariamente anche l'altro nodo avrà l'uno come adiacente
        return Boolean(this.#nodi[u].adiacenti[v])  // Tento di accedere alla chiave v: se non è presente, sarà falsy
    }

    percorso(u, v) {
        if (!this.#nodi[u] || !this.#nodi[v]) { // Controllo che u e v siano nodi del grafo
            return null
        }
        return this.#nodi[u].raggiungi(v)
    }

    raggiungibile(u, v) {
        // Il nodo v è raggiungibile se e solo se esiste un percorso da u a v
        return (this.percorso(u, v) != null)
    }
}

function main() {
    let a = new YetAnotherAlbero()

    a.addInterval([3, 5])
    
    a.addInterval([4, 6])
    console.log(a)
    console.log(a.root.mind, a.root.maxd, a.root.findValue(7))
}

function sub() {
    let m = new MapStation()
    
    m.binario("Q", "W")
    m.binario("W", "E")
    m.binario("E", "R")
    m.binario("S1", "S24")
    console.log(m)
    console.log(m.percorso("Q", "R"))
    console.log(m.raggiungibile("Q", "R"))
    console.log(m.raggiungibile("E", "S1"))
}

sub()