class FinestraLab extends Array {
    // Qui memorizzo quanti elementi al massimo può contenere la lista.
    #pmaxc;

    // Quando la lista viene creata, viene decisa anche la sua grandezza massima (di base è 10).
    constructor(pmaxc = 10) {
        super(); // Inizializza la lista vuota.
        this.#pmaxc = pmaxc;
    }

    get maxc() {
        return this.#pmaxc;
    }

    set maxc(m) {
        this.#pmaxc = m;
        // Se la nuova grandezza è più piccola di quanti elementi ho ora,
        // rimuovo quelli più vecchi finché non rientro nel nuovo limite.
        while (this.length > this.#pmaxc) this.shift();
    }

    push(e) {
        super.push(e);
        
        // Se supero il limite massimo consentito, rimuovo l'elemento più vecchio
        while (this.length > this.#pmaxc) this.shift();
    }

    // pop non fa nulla
    pop() {}

    // splice non fa nulla
    splice() {}
}