interface TrieInterface {
    insert: (k: string) => void
    lookup: (k: string) => boolean
    size: number
    prefixSearch: (p: string) => (w?: string, n?: Trie) => Generator<string|void, void, void>
}

interface TrieEdges {
    [x: string]: Trie
}

class Trie implements TrieInterface {
    #size: number = 0
    #character: string
    #edges: TrieEdges = {}
    #flag: boolean = false
    constructor(character: string = "") {
        if (character.length > 1) {
            this.#character = character[0]
            this.insert(character.slice(1))
        }
        else {
            this.#character = character
        }
    }
    get size(): number {return this.#size}
    get character(): string {return this.#character}
    get edges(): TrieEdges {return this.#edges}
    get flag(): boolean {return this.#flag}

    insert(key: string): void {
        if (key == "") {
            this.#flag = true
            return
        }
        if (!this.#edges[key[0]]) {
            this.#edges[key[0]] = new Trie(key[0])
        }
        this.#edges[key[0]].insert(key.slice(1))
        this.#size++
    }

    lookup(key: string): boolean {
        if (key == "") {return true}
        if (this.#character !== "" && this.#character !== key[0]) {
            return false
        }
        if (this.#character === "") {
            if (this.#edges[key[0]]) {
                return this.#edges[key[0]].lookup(key)
            }
            else {return false}
        }
        else {
            if (!key[1]) {return true}
            if (this.#edges[key[1]]) {
                return this.#edges[key[1]].lookup(key.slice(1))
            }
            else {return false}
        }
    }

    prefixSearch(p: string): (w?: string, n?: Trie) => Generator<string|void, void, void> {
        let thisNode: Trie = this

        if (!thisNode.lookup(p)) {
            let f: (w?: string, n?: Trie) => Generator<string|void, void, void> = function*() {yield}
            return f
        }
            
        // Da qui in avanti si è certi che p è costruibile
        let prefixPath: string = thisNode.character
        if (thisNode.character === "" && prefixPath.length < p.length) {
            thisNode = thisNode.edges[p[0]]
            prefixPath = thisNode.character
        }
        while (prefixPath.length < p.length) {
            thisNode = thisNode.edges[p[prefixPath.length]]
            prefixPath += thisNode.character
        }
        
        // Ora thisNode punta al nodo da cui bisogna partire per generare le parole
        let f: (w?: string, n?: Trie) => Generator<string|void, void, void> = function*(w = p, n = thisNode) {
            for (let c of Object.keys(n.edges)) {
                if (n.edges[c].flag) {
                    yield w + c
                    yield* f(w+c, n.edges[c])
                }
                else {
                    yield* f(w+c, n.edges[c])
                }
            }
        }
        return f
    }
}

let t: Trie = new Trie()
t.insert("pit")
t.insert("hajimasekkiya")
t.insert("hwaiting")
let gx: () => Generator<string|void, void, void> = t.prefixSearch("h")
for (let x of gx()) {
    console.log(x)
}
let g: () => Generator<string|void, void, void> = t.prefixSearch("")
for (let x of g()) {
    console.log(x)
}
