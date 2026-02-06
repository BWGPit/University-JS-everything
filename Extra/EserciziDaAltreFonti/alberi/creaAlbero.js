// Dall'esercizio 5 dell'esercitazione di Algoritmica sugli Alberi Binari "EserciziAlberi26.pdf"

function montaAB(a, p, r) {
    if (p > r) return null
    let q = Math.ceil((p+r)/2)
    return {val: a[q], sx: montaAB(a, p, q-1), dx: montaAB(a, q+1, r)}
}

function main() {
    let array = [0, 1, 2, 3, 4, 5, 6]
    console.log(montaAB(array, 0, array.length-1))
}

if (require.main === module) main()