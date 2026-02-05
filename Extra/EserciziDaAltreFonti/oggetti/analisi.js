function analisi(foo, d, c) {
    const risultatiFunzione = [];
    let iniettiva = true;
    let suriettiva = true;

    // --- BLOCCO 1: Calcolo Immagini ---
    // Itera su tutti gli elementi del dominio 'd'.
    // Applica la funzione 'foo' e raccoglie i risultati.
    for (let i in d) {
        let checking = foo(Number(i))
        // Se il risultato non è presente nel codominio 'c', la funzione non copre correttamente il codominio (potrebbe non essere ben definita o suriettiva).
        if (typeof c[checking] === "undefined") {
            suriettiva = false;
        }
        risultatiFunzione.push(checking);
    }
    
    // --- BLOCCO 2: Verifica Suriettività ---
    // Controlla se ogni elemento del codominio 'c' è presente nei risultati calcolati (immagine).
    // Se anche un solo elemento del codominio manca, non è suriettiva.
    let i = 0;
    let entries = Object.keys(c);
    while (suriettiva && i < entries.length) {
        if (!risultatiFunzione.includes(Number(entries[i]))) suriettiva = false; // =^..^=
        i++;
    }

    // --- BLOCCO 3: Verifica Iniettività ---
    // Ordina i risultati per facilitare il controllo dei duplicati.
    risultatiFunzione.sort( (a, b) => a - b);
    let j = 0;
    // Scorre l'array ordinato cercando valori adiacenti identici.
    // Se trova un duplicato, significa che due input diversi hanno generato lo stesso output -> non iniettiva.
    while(iniettiva && j < risultatiFunzione.length-1) {
        if (risultatiFunzione[j] === risultatiFunzione[j+1]) {
            iniettiva = false;
        }
        j++;
    }

    // --- BLOCCO 4: Restituzione Risultati ---
    // Restituisce un oggetto con le proprietà iniettiva, suriettiva e invertibile (deve essere entrambe).
    return {iniettiva, suriettiva, invertibile: iniettiva&&suriettiva}
}