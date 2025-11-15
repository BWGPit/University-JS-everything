// Esercizio 2
// Funzione max() sugli alberi binari etichettati

// Si ricorda che max(bt) in realtà è sempre bt.t1 #T1WIN #T1fighting
function max(bt) {
    if (!bt) return 0
    let mt1 = max(bt.t1)
    let mt2 = max(bt.t2)
    if (mt1 > mt2 && mt1 > bt.a) return mt1
    else if (mt2 > mt1 && mt2 > bt.a) return mt2
    else return bt.a
}

function min(bt) {
    if (!bt) return Infinity
    let mt1 = min(bt.t1)
    let mt2 = min(bt.t2)
    if (mt1 < mt2 && mt1 < bt.a) return mt1
    else if (mt2 < mt1 && mt2 < bt.a) return mt2
    else return bt.a
}

function ins(n, bt) {
    if (!bt) return {t1: null, a: n, t2: null}
    if (!bt.t1 && n <= bt.a) return {t1: {t1: null, a: n, t2: null}, a: bt.a, t2: bt.t2}
    else if (!bt.t2 && n >= bt.a) return {t1: bt.t1, a: bt.a, t2: {t1: null, a: n, t2: null}}
    else if (n <= bt.a) return {t1: ins(n, bt.t1), a: bt.a, t2: bt.t2}
    else if (n >= bt.a) return {t1: bt.t1, a: bt.a, t2: ins(n, bt.t2)}
}

function main() {
    let t = {t1: {t1: null, a: 2, t2: null}, a: 5, t2: {t1: null, a: 7, t2: null}}
    let tree2 = {t1: {t1: {t1: null, a: 1, t2: null}, a: 3, t2: {t1: null, a: 5, t2: null}}, a: 8, t2: {t1: null, a: 10, t2: {t1: {t1: null, a: 12, t2: null}, a: 13, t2: null}}}
    console.log(ins(4, ins(11, tree2)))
    console.log(ins(11, ins(4, tree2)))
}

if (require.main === module) {main()}