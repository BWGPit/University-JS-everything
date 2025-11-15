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

function main() {
    let testBT = {t1: {t1: null, a: 200, t2: null}, a: 25, t2: {t1: null, a: 4, t2: {t1: null, a: 1, t2: null}}}
    console.log(min(testBT))
}

if (require.main === module) {main()}