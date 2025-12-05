class Nodo {
    constructor(public label: any) {}
}

class Arco {
    constructor(
        public da: Nodo,
        public a: Nodo
    ) {}
}

class Grafo {
    nodi: Nodo[] = [];
    archi: Arco[] = [];

    matrAdj(): (0 | 1)[][] {
        const matrice: (0 | 1)[][] = [];
        
        for (let i = 0; i < this.nodi.length; i++) {
            matrice[i] = [];
            for (let j = 0; j < this.nodi.length; j++) {
                const esiste = this.archi.some(
                    (arco) => arco.da === this.nodi[i] && arco.a === this.nodi[j]
                );
                if (esiste) {
                    matrice[i][j] = 1;
                }
            }
        }
        
        return matrice;
    }

    matrInc(): (-1 | 0 | 1)[][] {
        const matrice: (-1 | 0 | 1)[][] = [];
        
        for (let i = 0; i < this.nodi.length; i++) {
            matrice[i] = [];
            for (let j = 0; j < this.archi.length; j++) {
                const arco = this.archi[j];
                if (arco.da === this.nodi[i]) {
                    matrice[i][j] = -1;
                } else if (arco.a === this.nodi[i]) {
                    matrice[i][j] = 1;
                }
            }
        }
        
        return matrice;
    }
}