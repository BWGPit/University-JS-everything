/**
 * Rappresentazione e specifica delle funzioni richieste.
 *
 * Struttura dati:
 * - Una lista di punti nel piano cartesiano è implementata come una lista collegata
 *   con nodi oggetti { val, next }.
 *   - val è una coppia di numeri [x, y] che rappresenta il punto.
 *   - next è il riferimento al nodo successivo; l'ultimo nodo ha next = null.
 *
 * Esempio:
 * let l = {
 *   val: [4, 5],
 *   next: {
 *     val: [-3, 45],
 *     next: {
 *       val: [-2, -2],
 *       next: {
 *         val: [-3, 12],
 *         next: {
 *           val: [3, -5],
 *           next: null
 *         }
 *       }
 *     }
 *   }
 * };
 * Nota: ad es. la coppia [-2, 3] rappresenta il punto con x = -2 e y = 3.
 *
 * Funzione filter(l, p):
 * - Input: una lista l come sopra e un predicato p (una funzione che riceve un punto [x,y] e
 *   ritorna true/false).
 * - Output: un array contenente tutti i punti di l che soddisfano p, nello stesso ordine
 *   in cui appaiono nella lista.
 * - Vincolo: l'array DEVE essere costruito ricorsivamente (l'implementazione ricorsiva è
 *   richiesta per l'esercizio).
 *
 * Funzione sortedFilter(l, p):
 * - Deve restituire lo stesso array prodotto da filter(l, p), ma ordinato in ordine crescente
 *   prima per x e, in caso di parità di x, per y.
 * - Suggerimento: riutilizzare filter per ottenere l'array e poi ordinare con Array.prototype.sort,
 *   usando un comparatore che confronta prima a[0] (x) e poi a[1] (y).
 */

function filter(l,p) {
    if (!l) return [];
    else if (p(l.val)) {
        return [l.val].concat(filter(l.next, p));
    } else {
        return filter(l.next, p);
    }
}

function sortedFilter(l, p) {
    let array = filter(l,p);
    array.sort((n1, n2) => {
        if (n1[0] === n2[0]) {
            return n1[1] - n2[1];
        } else {
            return n1[0] - n2[0];
        }
    });
    return array;
}