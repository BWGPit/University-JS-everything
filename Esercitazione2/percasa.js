// 1

function indicemultiplo(A, k) {
    let primo
    let ultimo

    for (let i = 0; i < A.length; i++) {
        if (i % k == 0 && A[i] % k == 0) { // TODO: GESTIRE LO 0
            if (!primo) primo = A[i]
            else ultimo = A[i]
        }
    }
    if (primo && ultimo)
        return [primo, ultimo]
    else if (!primo && !ultimo)
        return []
    else if (primo && !ultimo)
        return [primo, primo]
    else
        return [ultimo, ultimo]
}

function main() {
    console.log(indicemultiplo([0, 1, 2, 3, 4, 5, 7, 8], 2))
}

main()