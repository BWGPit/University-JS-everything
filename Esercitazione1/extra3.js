/*
Cambio monotonicità
Si scriva un programma che, data la funzione f(x) = x^3 - 6x^2 + 11x - 6, restituisca tutti i punti x in cui la funzione cambia monotonicità (da crescente a decrescente o viceversa)
valutando la funzione per valori di x compresi tra 1 e 4, a passi di 0.01
*/
let crescente = false, precedente = null
for (let x = 1; x <= 4; x += 0.01) {
    let fx = (x**3) - (6*(x**2)) + (11*x) - 6
    if (precedente != null) {
        if ((crescente ^ (fx > precedente))) {   // ^ = XOR
            console.log(`Cambia monotonia in x = ${x} diventando ${crescente?'decrescente':'crescente'}`)
        }
        crescente = (fx > precedente)
    }
    precedente = fx
}