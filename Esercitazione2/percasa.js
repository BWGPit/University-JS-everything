// 1

function indicemultiplo(A, k) {
    let primo
    let ultimo

    for (let i = 0; i < A.length; i++) {
        if (i % k == 0 && A[i] % k == 0) {
            if (typeof primo === "undefined") {
                primo = A[i]
            }
            else {
                ultimo = A[i]
            }
        }
    }
    if (typeof primo !== "undefined" && typeof ultimo !== "undefined")
        return [primo, ultimo]
    else if (typeof primo === "undefined" && typeof ultimo === "undefined")
        return []
    else if (typeof primo !== "undefined" && typeof ultimo === "undefined")
        return [primo, primo]
    else
        return [ultimo, ultimo]
}

// 2

function scendiSx(t) {
    if (!t) return ""
    let prossimo
    if (t.sx) prossimo = t.sx
    else if (t.dx) prossimo = t.dx
    else return t.val
    return t.val + scendiSx(prossimo)
}

function scendiDx(t) {
    if (!t) return ""
    let prossimo
    if (t.dx) prossimo = t.dx
    else if (t.sx) prossimo = t.sx
    else return t.val
    return t.val + scendiSx(prossimo)
}

function lrleaf(T) {
    return [scendiSx(T), scendiDx(T)]
}

// 3

function condizione(val, v) {
    return (-val) % v == 0
}

function tagliaRami(T, v) {
    if (T && typeof T.val != "undefined") {
        if (condizione(T.val, v)) {
            T.figli = []
        }
        else {
            for (f of T.figli) {
                tagliaRami(f, v)
            }
        }
    }
}

function main() {
    // console.log(indicemultiplo([0, 1, 2, 3, 4, 5, 7, 8], 2))
    let testtree = {val: "QWER ", sx: {val: "tripleS ", sx: {val: "NMIXX "}, dx: {val: "aespa "}}, dx: {val: "Stray Kids ", dx: {val: "Ateez ", sx: {val: "Xdinary Heroes "}}}}
    let testktree = {val: 3, figli: [{val: -2, figli: [{val: -4, figli: []}]}, {val: 3, figli: [{val: 5, figli: [{val: -4, figli: []}, {val: -8, figli: []}]}]}]}
    tagliaRami(testktree, 2)
    console.log(testktree)
}

main()