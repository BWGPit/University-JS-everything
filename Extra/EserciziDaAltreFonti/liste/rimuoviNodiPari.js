class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function filtraLista(head) {
    // Caso base: lista vuota
    if (head === null) {
        return { lista: null, rimossi: 0 };
    }

    // Se il nodo attuale ha un valore pari e intero, lo rimuoviamo
    if (Number.isInteger(head.value) && head.value % 2 === 0) {
        const result = filtraLista(head.next);
        return {
            lista: result.lista,
            rimossi: result.rimossi + 1
        };
    }

    // Se il nodo attuale non è pari, lo manteniamo e processiamo il resto della lista
    const result = filtraLista(head.next);
    head.next = result.lista;
    return {
        lista: head,
        rimossi: result.rimossi
    };
}