/*
Svolgimento della seconda prova - non ancora corretto - Pietro T.
*/

function rappresenta(n, b) {
    // Caso base
    if (n <= 0) return []
    // Caso induttivo
    let l = rappresenta(Math.floor(n/b), b)
    l.unshift(n % b)
    return l
}

function repdigit(s) {
    // Verifica se s è repdigit
    if (s.length <= 1) return true
    let questo = s.pop()
    if (questo != s[0]) return false
    return repdigit(s)
}

function contaRepdigit(A, b) {
    // Caso base
    if (A.length == 0) {
        return 0
    }
    // Caso induttivo
    let questo = A.pop()
    if (repdigit(rappresenta(questo, b))) {
        return 1 + contaRepdigit(A, b)
    }
    else return contaRepdigit(A, b)
}

function comparatoreTask(criterio, ascendente=true) {
    // Di default, ascendente è true
    // Restituisce la funzione attesa
    return (a, b) => {
        let risultato   // Inizializzo risultato per assumere
        // valore intero che poi sarà invertito o meno una volta sola
        // a seconda del parametro ascendente
        /*
        if (criterio === "dipendenze") {
            risultato = a.dipendenze.length - b.dipendenze.length
        }
        else if (criterio === "priorita") {
            risultato = a.priorita - b.priorita
        }
        else {
            // Allora è per id
            risultato = a.id.localeCompare(b.id)
        }
        */
        switch (criterio) {
            case "dipendenze": {
                risultato = a.dipendenze.length - b.dipendenze.length
                break
            }
            case "priorita" : {
                risultato = a.priorita - b.priorita
                break
            }
            default: {
                // Allora è per id
                risultato = a.id.localeCompare(b.id)
            }
        }
        if (ascendente) return risultato
        else return -risultato
    }
}

function unioneParziale(A, n) {
    // Casi limite: n = 0, non ci sono insiemi nell'array, si vogliono più elementi
    // di quanti insiemi ci siano
    if (n === 0 || A.length == 0 || A.length < n) return []
    let parziale = {}
    for (let insieme of A) {
        for (let e in insieme) {
            if (!parziale[e]) parziale[e] = 1
            else parziale[e] += 1
        }
    }
    for (let e in parziale) {
        if (parziale[e] < n)
            delete parziale[e]
    }
    return parziale
}

function prodottoFLista(head, f) {
    // Caso base
    if (!head) return 1
    // Caso induttivo
    if (f(head)) return head.val * prodottoFLista(head.next, f)
    else return prodottoFLista(head.next, f)
}

console.log(20.2 % 1)