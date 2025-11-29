// Esercizi dai lucidi 251128

// Operazioni
function math(op, ...args) {
    [t, ...rest] = args
    return rest.reduce((x, y) => 
        {
            switch (op) {
            case "+":
                return x + y
            case "-":
                return x - y
            case "*":
                return x * y
            case "/":
                return x / y
            default:
                console.log("Invalid input")
                return Infinity
        }}, t)
}

// Filter in-place
function fip(a, p) {
    let n = a.length
    for (let i = 0; i < n; i++) {
        let t = a.shift()
        console.log(t)
        if (p(t)) a.push(t)
    }
}

// Sommatoria
function somma(...args) {
    return args.reduce((x, y) => (x+y), 0)
}

// isSorted
// (vincolo: risolvere senza cicli; usare .reduce())
function isSorted(a) {
    [t, ...rest] = a
    if (!rest) return true
    return rest.reduce((x, y) => (x[1] && y>x[0])?[y, true]:[y, false], [t, true])[1]
}

// Deframmenta
function deframmenta(a) {
    return a.filter((e, i) => (e === a[i-1] || e === a[i+1]))
}

// Una fabbrica di funzioni costanti
// (la funzione fabbrica(k) deve restituire una funzione f tale che f() = k)
function fabbrica(k) {return () => k}

// Applicazione parziale
function partapply(bop, a) {return (b) => bop(a, b)}

// Reverse
// (vincolo: restituisca un nuovo array senza modificare l'array di partenza)
// 1A: iterativa con cicli e opportuni indici
function reverse1a(a) {
    let copy = []
    for (let i = a.length-1; i >= 0; i--) {copy.push(a[i])}
    return copy
}
// 1B: iterativa con i metodi degli array
function reverse1b(a) {
    return a.map((e, i) => a[a.length-1-i])
}
// 2A: ricorsiva con i metodi degli array
function reverse2a(a) {
    if (a.length == 0) return []
    return reverse2a(a.slice(1)).concat(a[0])
}
// 2B: ricorsiva con assegnamenti destrutturati e spread
function reverse2b(a) {
    [t, ...r] = a
    let e = t
    if (r.length == 0) return t===undefined?[]:[t]
    return reverse2b(r).concat(e)
}

// Funprop
function funprop(f, p=()=>true) {
    return (a, b) => {
        let stack = []
        for (i = a; i <= b; i++) {
            if (p(f(i))) stack.push(i)
        }
        return stack
    }
}

function main() {
    // let ming = partapply((x, y) => y+x, "ming")
    // console.log(ming("Siyo"))   // MINGMINGMING MINNANO SIYOMING! MIGLIORE IDOL IN ASSOLUTO
    // let toreverse = ["Q", "W", "E", "R"]
    // console.log(reverse2b(toreverse))
    // console.log(toreverse)
    console.log(funprop(n=>2*n, n=>n%2==0)(4, 6))
    console.log(funprop(n=>2*n, n=>n>10)(4, 8))
    console.log(funprop(n=>n, n=>n%2==1)(10, 20))
    console.log(funprop(n=>n*n)(4, 6))
}

if (require.main === module) main()