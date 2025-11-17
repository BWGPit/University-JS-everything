/*
Si consideri una struttura dati ad albero binario, i cui nodi sono
oggetti con quattro proprietà: sx e dx, che riferiscono rispettivamente
al figlio sinistro e al figlio destro del nodo stesso; val e sotto, due
valori interi. Le proprietà sx e dx sono opzionali.
Si scriva in TS una funzione contaSotto(T) che, dato un albero binario T
come argomento, conti per ogni nodo t in T (inclusa la radice) il numero
di nodi appartenenti al sotto-albero di cui t è radice (t incluso). Questo
valore deve essere scritto in sotto. La funzione restituisce il valore sotto
della radice di T.
Nota: Si assuma che il valore di sotto in ogni nodo in T sia inizialmente 0.
*/

function equal(t1, t2) {
    if (!t1 || !t2) return (!t1 && !t2)
    return (
        t1.val === t2.val &&
        t1.sotto === t2.sotto &&
        equal(t1.sx, t2.sx) &&
        equal(t1.dx, t2.dx)
    )
}

function contaSotto(T) {
    let sottoSx = 0, sottoDx = 0
    if (T["sx"] != undefined) sottoSx += contaSotto(T.sx)
    if (T["dx"] != undefined) sottoDx += contaSotto(T.dx)
    T.sotto = sottoSx + sottoDx + 1
    return T.sotto
}

/*
Si scriva una funzione ricorsiva cifre(n) che, dato come argomento un intero
positivo n, restituisca un array che in posizione i contiene la cifra i-esima
di n, dalla più significativa alla meno significativa.
*/

function cifre(n) {
    if (n < 10) return [n]
    let arr = cifre(Math.trunc(n/10))
    arr.push(n%10)
    return arr
}

function main() {
    let Qa = {val: 2, sotto: 0, sx: {val: 4, sotto: 0, sx: {val: 6, sotto: 0}, dx: {val: 6, sotto: 0, dx:{val: 8, sotto: 0}}}, dx: {val: 7, sotto: 0, sx: {val: 8, sotto: 0}}};
    console.log(contaSotto(Qa))
    console.log(equal(Qa, {val: 2, sotto: 7, sx: {val: 4, sotto: 4, sx: {val: 6, sotto: 1}, dx: {val: 6, sotto: 2, dx:{val: 8, sotto: 1}}}, dx: {val: 7, sotto: 2, sx: {val: 8, sotto: 1}}}))
}

if (require.main === module) {main()}