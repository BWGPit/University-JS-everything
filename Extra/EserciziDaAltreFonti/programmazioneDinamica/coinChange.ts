type matrixField = number|null

class Matrix {
    #mat: matrixField[][]
    #rows: number
    #columns: number
    constructor(rows: number, columns: number) {
        this.#rows = rows
        this.#columns = columns
        this.#mat = []
        for (let i = 0; i < columns; i++) {
            let thisrow: matrixField[] = []
            for (let j = 0; j < rows; j++) {
                thisrow.push(null)
            }
            this.#mat.push(thisrow)
        }
    }
    get mat() {return this.#mat}
    get rows() {return this.#rows}
    get columns() {return this.#columns}

    public getKey(row: number, column: number): matrixField {
        return this.#mat[column][row]
    }

    public setKey(key: matrixField, row: number, column: number): void {
        this.#mat[column][row] = key
    }

    public getColumn(index: number): matrixField[] {
        return this.#mat[index]
    }
}

function coinChange(coins: number[], amount: number): number {
    let m: Matrix = new Matrix(coins.length+1, amount+1)
    for (let j = 0; j < amount+1; j++) {m.setKey(Infinity, 0, j)}
    for (let i = 0; i < coins.length+1; i++) {m.setKey(0, i, 0)}
    // We have now base cases solved

    for (let i = 1; i < coins.length+1; i++) {
        for (let j = 1; j < amount+1; j++) {
            let q: number = Math.floor(j/coins[i-1])
            if (q > 0)
                m.setKey(q+Number(m.getKey(i-1, j-(q*coins[i-1]))), i, j) // Soluzione del tutorato: era il minimo tra i primi 1...i-1, non direttamente i-1
            else
                m.setKey(Number(m.getKey(i-1, j)), i, j)
        }
    }

    let lastColumn: number[] = []
    for (let n of m.getColumn(m.columns-1)) {
        if (typeof n == "number") {lastColumn.push(n)}
    }
    let min: number = Math.min(...lastColumn)
    if (min == Infinity) {return -1}
    return min
}