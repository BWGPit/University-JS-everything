enum Semi {
    Cuori = 1,
    Quadri = 2,
    Fiori = 3,
    Picche = 4
}

enum Valori {
    Due = 2,
    Tre = 3,
    Quattro = 4,
    Cinque = 5,
    Sei = 6,
    Sette = 7,
    Otto = 8,
    Nove = 9,
    Dieci = 10,
    Jack = 11,
    Donna = 12,
    Re = 13,
    Asso = 14
}

class Mano {
    private carte: [Semi, Valori][] = [];
    constructor(carta1: [Semi, Valori], carta2: [Semi, Valori], carta3: [Semi, Valori], carta4: [Semi, Valori], carta5: [Semi, Valori]) {
        this.carte = [carta1, carta2, carta3, carta4, carta5];
    }

    public poker(): boolean {
        let count: Map<Valori, number> = new Map();
        for (let i = 0; i < this.carte.length; i++) {
            if (count.has(this.carte[i][1])) {
                count.set(this.carte[i][1], count.get(this.carte[i][1])! + 1);
            } else {
                count.set(this.carte[i][1], 1);
            }
        }
        for (let [key, value] of count) {
            if (value === 4) {
                return true;
            }
        }
        return false;
    }

    public scala(): boolean {
        let valori: Valori[] = this.carte.map(carta => carta[1]);
        valori.sort((a, b) => a - b);
        for (let i = 0; i < valori.length - 1; i++) {
            if (valori[i + 1] - valori[i] !== 1) {
                return false;
            }
        }
        return true;
    }

    public scalaReale(): boolean {
        let semi: Semi[] = this.carte.map(carta => carta[0]);
        let valori: Valori[] = this.carte.map(carta => carta[1]);
        for (let i = 0; i < semi.length - 1; i++) {
            if (semi[i] !== semi[i + 1]) {
                return false;
            }
        }
        valori.sort((a, b) => a - b);
        for (let i = 0; i < valori.length - 1; i++) {
            if (valori[i + 1] - valori[i] !== 1) {
                return false;
            }
        }
        return true;
    }

    public colore(): boolean {
        let semi: Semi[] = this.carte.map(carta => carta[0]);
        for (let i = 0; i < semi.length - 1; i++) {
            if (semi[i] !== semi[i + 1]) {
                return false;
            }
        }
        return true;
    }
}
