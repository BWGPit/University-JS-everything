class MapStation {
    constructor() {
        this.grafo = {};
        this.size = 0;
    }

    binario(u,v) {
        if (!this.grafo[u]) {
            this.grafo[u] = [];
            this.size++;
        }

        if (!this.grafo[v]) {
            this.grafo[v] = [];
            this.size++;
        }

        if (!this.grafo[u].includes(v)){ 
            this.grafo[u].push(v);
            this.grafo[v].push(u);
        }
    }

    diretto(u,v) {
        if (this.grafo[u]) 
            if (this.grafo[u].includes(v)) return true;
        return false;
    }

    raggiungibile(u,v) {
        return this.percorso(u,v) !== null;
    }

    percorso(u,v) {
        if (!this.grafo[u] || !this.grafo[v]) return null;
        if (u === v) return [u];

        let visitati = new Set();
        let coda = [[u]];

        while (coda.length > 0) {
            let walk = coda.shift();
            let nodo = walk[walk.length - 1];
            if (nodo === v) return walk;
            if (!visitati.has(nodo)) {
                visitati.add(nodo);
                for (let vicino of this.grafo[nodo]) {
                    coda.push([...walk, vicino]);
                }
            }
        }
        return null;
    }
}