function percorriAlbero(bt, percorso) {
    // Percorso: ["sx", "dx", "sx", "sx"...]
    if (percorso.length == 0) return bt
    let t = percorso.shift()
    if (t == "sx") return percorriAlbero(bt.sx, percorso)
    return percorriAlbero(bt.dx, percorso)
}

function rimpiazzaRamo(bt, percorso, nuovoRamo) {
    let direzione = percorso.pop()
    if (direzione !== undefined) {
        let albero = percorriAlbero(bt, percorso)
        if (direzione == "sx") {
            albero.sx = nuovoRamo
        }
        else {
            albero.dx = nuovoRamo
        }
    }
}

function trovaSottoAlbero(bt, cond, record) {
    if (bt) {
        if (cond(bt.val)) return [bt, record]
        let sotto = trovaSottoAlbero(bt.sx, cond, [...record, "sx"])
        if (!sotto) sotto = trovaSottoAlbero(bt.dx, cond, [...record, "dx"])
        return sotto
    }
}

function scambiaRamo(bt1, bt2, cond) {
    let sottoAlbero1 = trovaSottoAlbero(bt1, cond, [])
    let sottoAlbero2 = trovaSottoAlbero(bt2, cond, [])
    if (sottoAlbero1.length > 0 && sottoAlbero2.length > 0)
        rimpiazzaRamo(bt1, sottoAlbero1[1], sottoAlbero2[0])
        rimpiazzaRamo(bt2, sottoAlbero2[1], sottoAlbero1[0])
}

function main() {
    let testtree = {val: 5, sx: {val: 2, sx: {val: 1}}, dx: {val: 7, dx: {val: 8}}}
    let test2 = {val: 50, sx: {val: 7, sx: {val: 100}}, dx: {val: 70, dx: {val: 80}}}
    console.log(testtree, test2)
    scambiaRamo(testtree, test2, (x) => (x==7))
    console.log(testtree, test2)
}

main()