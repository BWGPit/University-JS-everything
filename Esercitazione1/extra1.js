/*
Intersezione rette
Si scriva un programma che, dati quattro valori a, c, b, d, calcoli il punto di intersezione delle due rette y = ax + c e y = bx + d, se esiste
*/

let a = 2, c = 3, b = 2, d = 3
/*
/ y = ax + c
\ y = bx + d
ax + c = bx + d
ax - bx = d - c
(a-b)x = d-c
x = (d-c)/(a-b)
*/
let x = (d-c)/(a-b)
if (!isNaN(x) && x != +Infinity && x != -Infinity) {
    let y = a*x+c
    console.log(`Punto di intersezione: (${x}, ${y})`)
}