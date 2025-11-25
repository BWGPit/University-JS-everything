/*
Si consideri un array i cui elementi possono essere o stringhe, oppure altri array dello stesso tipo (ovvero, aventi per elementi o stringhe,
oppure altri array dello stesso tipo, e così via). Si scriva una funzione lineare(a) che, dato un array come descritto sopra, restituisca un
array contenente le sole stringhe, nello stesso ordine in cui comparivano nell’array a.
Esempi:
lineare(["pippo", ["va", "a"], "scuola"]) → ["pippo", "va", "a", "scuola"]
lineare([["che"], "bello", ["questo", "esercizio"], "qui", []]) → ["che", "bello", "questo", "esercizio", "qui"]
*/

function lineare(a) {
    if (a.length === 0) return []
    let t = a.pop()
    if (typeof t === "object") {
        t = lineare(t)
    }
    return lineare(a).concat(t)
}

console.log(lineare(["pippo", ["bonchi", ["di", "fondamenti"]], "è", "ganzo", [[[[]]]], "direi", "di", ["sì"]]))
console.log(lineare(["pippo", ["va", "a"], "scuola"]))
console.log(lineare([["che"], "bello", ["questo", ["esercizio","complicato"]], "qui", []]))
console.log(lineare([[], [], [[]]]))
console.log(lineare([["che"], "bello", ["questo", "esercizio"], "qui", []]))