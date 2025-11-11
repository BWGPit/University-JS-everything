// NTermini: funzioni base e aritmetica (somma, prodotto, esponente)

function copy(nterm) {
    let len = val(nterm)
    if (len == 0) {return null} // Caso limite: si vuol copiare 0
    let result = {s: null}  // Settato di default a rappresentare 1 ché 0 lo si è escluso nel caso limite
    for (let i = 1; i < len; i++) {
        result = {s: result}
    }
    return result
}

function val(nterm) {
    if (nterm == null) {return 0}
    return 1 + val(nterm.s)
}

function add(x, y) {
    if (y != null) {
        x = {s: add(x, y.s)}
    }
    return x
}

function mul(x, y) {
    if (y == null) {return null}
    if (y.s == null) {return x}
    x = add(x, mul(x, y.s))
    return x
}

function exp(x, y) {
    if (y == null) {return {s: null}}
    if (y.s == null) {return x}
    x = mul(x, exp(x, y.s))
    return x
}

function main() {
    let n1 = {s: {s: null}}    // valuta 2 (z = null)
    let n2 = {s: {s: {s: {s: null}}}}
    console.log(val(n1), val(n2))
    n1 = exp(n1, n2)
    console.log(val(n1))
}

// if __name__ == "__main__" ma in JS (fonte: Stackoverflow (NON MORIRA' MAI!))
if (require.main === module) {main()}