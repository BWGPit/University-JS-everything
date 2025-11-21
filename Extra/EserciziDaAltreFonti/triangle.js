/*
Realizzare una funzione ricorsiva che, dato un intero n >= 0,
calcoli il valore dell’ennesimo numero triangolare.
https://it.wikipedia.org/wiki/Numero_triangolare
*/

function triangle(n) {
    if (n === 0) return 0
    return n + triangle(n-1)
}

console.log(triangle(3))
console.log(triangle(6))