/*
Esercizio 2
Si scriva un programma che analizzi la funzione f(x) = x^3 - 6x^2 + 11x - 6 per valori di x compresi tra 1 e 4, a passi di 0.01.
Il programma deve stampare:
• tutti gli zeri della funzione nell'intervallo, considerando un valore pari a zero se minore in valore assoluto di 1e-6,
• il valore minimo e il valore massimo assunti dalla funzione nell'intervallo.
*/
let min = null, max = null, zeri = ""
for (let x = 1; x <= 4; x += 0.01) {
    let fx = (x**3) - (6*(x**2)) + (11*x) - 6
    if (Math.abs(fx) < 1e-6) {
        x = Math.round(x)
        zeri = zeri==""?String(x):`${zeri}, ${x}`
        if (min == null) {
            min = x
        } else if (x < min) {
            min = x
        }
        if (max == null) {
            max = x
        } else if (x > max) {
            max = x
        }
    }
}
console.log(`Min: ${min}; max: ${max}; zeri: ${zeri}`)