function differenzaCoppie(A: any[], k: number): number {
    let conto: number = 0

    for (let i = 0; i < A.length-1; i++) {
        for (let j = i+1; j < A.length; j++) {
            if (typeof A[i] == "number" && typeof A[j] == "number" && Math.abs(A[j]-A[i]) % k == 0) {
                conto++
            }
        }
    }

    return conto
}

console.log(differenzaCoppie([1, 4, 7, 10], 3))
console.log(differenzaCoppie([2, 5, 8, 11], 3))
console.log(differenzaCoppie([1, 2, 3], 5))