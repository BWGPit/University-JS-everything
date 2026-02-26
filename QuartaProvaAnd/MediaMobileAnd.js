class MediaMobile {
    #k;
    #valoriIniziali;
    constructor(k, ...i) {
        this.#k = k;
        this.#valoriIniziali = [...i];
    }

    *succ() {
        let valori = [...this.#valoriIniziali];
        for (let v of valori) yield v;
        while (true) {
            let somma = 0;
            for (let v of valori) somma += v;
            let media = Math.floor(somma/this.#k);
            valori.shift();
            valori.push(media);
            yield media;
        }
    }
}