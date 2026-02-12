function analisi(foo, d, c) {
    const risultatiFunzione = [];
    let iniettiva = true;
    let suriettiva = true;
    for (let i in d) {
        let checking = foo(Number(i))
        if (typeof c[checking] === "undefined") {
            suriettiva = false;
        }
        risultatiFunzione.push(checking);
    }
    
    let i = 0;
    let entries = Object.keys(c);
    while (suriettiva && i < entries.length) {
        if (!risultatiFunzione.includes(Number(entries[i]))) suriettiva = false; // =^..^=
        i++;
    }
    risultatiFunzione.sort( (a, b) => a - b);
    let j = 0;
    while(iniettiva && j < risultatiFunzione.length-1) {
        if (risultatiFunzione[j] === risultatiFunzione[j+1]) {
            iniettiva = false;
        }
        j++;
    }
    return {iniettiva, suriettiva, invertibile: iniettiva&&suriettiva}
}