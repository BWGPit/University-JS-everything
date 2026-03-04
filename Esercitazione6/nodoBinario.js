class NodoBinario {
    val
    left
    right
    #foglia
    constructor(val, left=null, right=null) {
        if (typeof val != "number" || isNaN(val) || [Infinity, -Infinity].includes(val) || (left != null && !(left instanceof NodoBinario)) || (right != null && !(right instanceof NodoBinario))) {
            throw new TypeError("valori non validi")
        }
        this.val = val
        this.left = left
        this.right = right
        this.#foglia = (!left && !right)
    }
    get foglia() {return this.#foglia}
}

function* foglieWrapped(t, prof) {
    if (t.foglia) yield [prof, t.val]
    if (t.left) yield *foglieWrapped(t.left, prof+1)
    if (t.right) yield *foglieWrapped(t.right, prof+1)
    return
}

function* foglieConProfondita(t) {
    if (!t) {return}
    yield *foglieWrapped(t, 0)
}

Map.prototype.incrementa = function(key, amount) {
    if (!this.get(key)) {
        this.set(key, amount)
    } else {
        let k = this.get(key)
        k += amount
        this.set(key, k)
    }
    return this
}

Map.sommaFogliePerProfondita = function(radice) {
    let m = new Map()
    if (radice) {
        for (let f of foglieConProfondita(radice)) {
            // f[0]: profondità; f[1]: valore
            if (!m.has(f[0])) {
                m.set(f[0], f[1])
            }
            else {
                m.set(f[0], m.get(f[0])+f[1])
            }
        }
    }
    return m
}

function main() {
    //        5
    //       / \
    //      3   2
    //     / \
    //    1   4

    let t =
    new NodoBinario(5,
    new NodoBinario(3,
        new NodoBinario(1),
        new NodoBinario(4)
    ),
    new NodoBinario(2)
    );

    [...foglieConProfondita(t)] // -> [ [2,1], [2,4], [1,2] ]

    console.log(Map.sommaFogliePerProfondita(t))
    // -> Map {
    //      2 => 5,   // 1+4
    //      1 => 2
    //    }
}

main()