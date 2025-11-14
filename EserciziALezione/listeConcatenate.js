// Operazioni di base viste a lezione

function listFind(head, value) {
    if (!head)
        return null
    if (head.val === value)
        return head
    return listFind(head.next, value)
}

function listInsert(x, value) {
    if (!x) return
    let nuovo = {val: value, next: x.next}
    x.next = nuovo
}

function listPush(head, value) {
    if (!head)
        return {val: value, next: null}
    if (head.next)
        listPush(head.next, value)
    else
        listInsert(head, value)
    return head
}

function listPop(head) {
    if (!head)
        return [null, undefined]
    if (!head.next)
        return [null, head.val]
    let [newNext, removedVal] = listPop(head.next)
    head.next = newNext
    return [head, removedVal]
}

// Esercizio 1
// Scrivere una funzione ricorsiva listNth(head, n) che restituisce il nodo alla
// posizione n. Si assuma che il primo nodo abbia indice 0.

function listNth(head, n) {
    if (!head)
        return null
    if (n == 0)
        return head
    return listNth(head.next, n-1)
}

// Esercizio 2
// Scrivere una funzione ricorsiva listIsSorted(head) che restituisce true
// se e solo se la lista è ordinata in modo non decrescente.

function listIsSorted(head) {
    if (!head || !head.next) return true
    if (head.val > head.next.val) return false
    else
        return listIsSorted(head.next)
    // In alternativa alle ultime 3 righe, il lucido propone questa soluzione:
    // return head.val <= head.next.val && listIsSorted(head.next)
}

// Esercizio 3
// Scrivere una funzione ricorsiva listMap(head, f) che restituisce una nuova
// lista i cui valori sono il risultato dell'applicazione di f ai valori della
// lista originale.

function listMap(head, f) {
    if (!head) return null
    return {val: f(head.val), next: listMap(head.next, f)}
}

// Esercizio 4
// Scrivere una funzione ricorsiva listEquals(l1, l2) che restituisce true se
// e solo se le due liste sono uguali, ossia hanno gli stessi valori nello
// stesso ordine.

function listEquals(l1, l2) {
    if (!l1 && !l2) return true
    if (!l1 || !l2) return false
    return l1.val === l2.val && listEquals(l1.next, l2.next)
}

// Esercizio 5
// Scrivere una funzione ricorsiva listSplice(head, start, deleteCount) che
// restituisce una lista ottenuta rimuovendo deleteCount nodi a partire
// dalla posizione start. Si assuma che il primo nodo abbia indice 0.

function listSplice(head, start, deleteCount) {
    if (!head) return null
    if (start <= 0 && deleteCount > 0) return listSplice(head.next, start-1, deleteCount-1)
    return {val: head.val, next: listSplice(head.next, start-1, deleteCount)}
}