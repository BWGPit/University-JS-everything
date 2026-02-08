function contaFoglieKario(u)
{
    if (!u) return 0
    if (u.figli.length > 0) {
        let totale = 0
        for (let figlio of u.figli) {
            totale += contaFoglieKario(figlio)
        }
        return totale
    }
    return 1
}

function contaFoglieBinarizzato(u) {
    if (!u) return 0
    if (u.figli.length > 0) {
        let totale = 0
        if (u.figli[u.figli.length-1].figli.length == 0) totale++
        for (let figlio of u.figli) {
            totale += contaFoglieBinarizzato(figlio)
        }
        return totale
    }
    return 0
}

function contaFoglieOrdinale(u) {
    if (!u) return 0
    let foglie = 0
    if (!u.sx) {
        foglie++
    } else {
        foglie = foglie + contaFoglieOrdinale(u.sx)
    }
    foglie += contaFoglieOrdinale(u.dx)
    return foglie
}

function CalcolaAltezzaOrdinale(u) {
    if (!u) return -1
    let h_sx = CalcolaAltezzaOrdinale(u.sx) + 1
    let h_dx = CalcolaAltezzaOrdinale(u.dx)
    return Math.max(h_sx, h_dx)
}


function main() {
    /*
                3
            -2  3
            -4  5  
                -4 -8
    */ 
    let testktree = {
        val: 3, figli: [
            {
                val: -2, figli: [
                    {val: -4, figli: []}
            ]},
            {
                val: 3, figli: [
                    {val: 5, figli: [
                        {val: -4, figli: []},
                        {val: -8, figli: []}
                    ]}
                ]
            }
        ]
    }

    /*
            3
        -2
    -4      3
           5
        -4
            -8

    */
    let test2tree = {
        val: 3,
        sx: {
            val: -2,
            sx: {val: -4},
            dx: {
                val: 3,
                sx: {
                    val: 5,
                    sx: {val: -4, dx: {val: -8}}
                }
            }
        }
    }
    console.log(CalcolaAltezzaOrdinale(test2tree))
}

if (require.main === module) main()