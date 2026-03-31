interface TrieInterface {
    insert: (k: string) => void
    lookup: (k: string) => boolean
    size: number
    prefixSearch: (p: string) => () => Generator<string, void, void>
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

    prefixSearch(p: string): () => Generator<string, void, void> {
        let thisNode: Trie = this
        let f: () => Generator<string, void, void> = function*() {
            let results: string[] = []
            if (!thisNode.lookup(p)) {yield* results}
            
            // Da qui in avanti si è certi che p è costruibile
            let prefixPath: string = thisNode.character
            if (thisNode.character === "") {
                thisNode = thisNode.edges[p[0]]
                prefixPath = thisNode.character
            }
            while (prefixPath.length < p.length) {
                thisNode = thisNode.edges[p[prefixPath.length]]
                prefixPath += thisNode.character
            }
            
            console.log(thisNode.character, thisNode.flag, prefixPath)
            // Ora thisNode punta al nodo da cui bisogna partire per generare le parole

            for (let c of Object.keys(thisNode.edges)) {
                let word: string = p
                // TODO: COMPLETARE
            }
            yield* results
        }
        return f
    }
}

let t: Trie = new Trie()
t.insert("pit")
t.insert("hajimasekkiya")
t.insert("hwaiting")
let g: () => Generator<string, void, void> = t.prefixSearch("hajimasekk")
for (let x of g()) {
    console.log(x)
}