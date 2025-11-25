/*
Realizzare una funzione ricorsiva ordinato(a), con a 
un array di numeri interi positivi. La funzione restituisce true se 
a è ordinato in ordine strettamente crescente, e false altrimenti.
Esempi:
ordinato([1,5,9,12,56,57,129]) restituisce true
ordinato([7]) restituisce true
ordinato([3,7,5,8,9,10]) restituisce false
*/

function ordinato(a) {
    if (a.length <= 1) return true   
    if (a[0] >= a[1]) return false
    a.shift()
    return ordinato(a)
}