function filteredSet(S, p) {
    let copyS = {...S}
    let count = 0
    for (e in copyS) {
        if (!(p(e))) {
            delete copyS[e]
            count += copyS[e]
        }
    }
    return [copyS, count]
}

function ksumlimit(p, k, ...n) {
    let nfilt = n.filter((x)=>(x>p))
    let sum = 0
    for (let i = 0; i < nfilt.length; i++) {
        sum += nfilt[i]
        if (sum > k) {
            return nfilt.slice(0, i)
        }
    }
    return nfilt
}

function prodEstremi(A) {
    let newA = [...A]
    let result = []
    newA.sort()
    for (let i = 0; i < Math.ceil((newA.length)/2); i++) {
        result.push(newA[i]*newA[newA.length-1-i])
    }
    return result
}

function nuovaPila() {
    let A = []
    return {impila: (x) => A.push(x), depila: () => A.pop(), pila: A}
}

function trovav(T, v) {
    if (T.figli == undefined) return [undefined, null]

    for (let i = 0; i < T.figli.length; i++) {
        if (T.figli[i].val == v) return [T.figli[i], i]
        let [A, ind] = trovav(T.figli[i], v)
        if (!A) return [A, ind] // Cioè A != undefined
    }
    return [undefined, null]
}

// #T1WIN #T1fighting
function innesta(T1, v1, T2, v2) {
    [A1, i] = trovav(T1, v1)
    [A2, j] = trovav(T2, v2)
    let temp = A1.figli[i]
    A1.figli[i] = A2.figli[j]
    A2.figli[j] = temp
}

function main() {
    let p = nuovaPila()
    p.impila("Chodan")
    console.log(p.pila)
    for (let member of ["Magenta", "Hina", "Siyeon", "NOT_QWER_MEMBER"]) {p.impila(member)}
    console.log(p.pila)
    p.depila()
    console.log(p.pila)
    let p2 = nuovaPila()
    console.log(p2.pila)
}

if (require.main === module) main()