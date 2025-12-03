function mappaGradi(gl) {
    // Calcola i gradi in un grafo non orientato rappresentato in maniera implicita (evitando la ripetizione degli archi)
    let gradi = {}
    for (let i in gl) {
        gradi[i]==undefined?gradi[i]=gl[i].length:gradi[i]+=gl[i].length
        for (let j of gl[i]) {
            gradi[j]==undefined?gradi[j]=1:gradi[j]++
        }
    }
    return gradi
}

function haCircuitoEuleriano(gl) {
    let mg = mappaGradi(gl)
    let gradoPari = true
    let i = 0
    while (gradoPari && gl[i] !== undefined) {
        gradoPari = (mg[i] % 2 == 0)
        i++
    }
    return gradoPari
}

function haTrailEuleriano(gl) {
    let mg = mappaGradi(gl)
    let nodiGradoDispari = 0
    let i = 0
    while (nodiGradoDispari <= 2 && gl[i] !== undefined) {
        if (mg[i] % 2 != 0) nodiGradoDispari++
        i++
    }
    return (nodiGradoDispari == 2)
}

function contaNodi(gl) {
    let i = 0
    while (gl[i] !== undefined) {
        i++
    }
    return i
}

function isomorfismo(gl1, gl2, iso) {
    // Restituisce true se e solo se iso è un isomorfismo da gl1 a gl2
    if (!(contaNodi(gl1) == contaNodi(gl2))) return false
    let isomorfo = true
    let i = 0
    while (isomorfo && gl1[i] !== undefined) {
        for (let n of gl1[iso[i]]) {
            if (!(gl2[i].includes(iso[n]) || gl2[iso[n]].includes(i))) {
                isomorfo = false
                break
            }
        }
        i++
    }
    return isomorfo
}

function main() {
    let g1 = {
        0: [1],
        1: [],
        2: []
    }
    let g2 = {
        0: [],
        1: [],
        2: [0]
    }
    console.log(isomorfismo(g1, g2, {0: 0, 1: 2, 2: 1}))
}

main()