function visit(t) {
    // VISITA IN ORDINE ANTICIPATO
	// if (!bt) return []
	// return bt.val.concat(visit(bt.sx)).concat(visit.dx)
    if (t) {
        console.log(t.val)
        visit(t.sx)
        visit(t.dx)
    }
}

function simmetrica(t) {
	// VISITA SIMMETRICA
	if (t) {
		simmetrica(t.sx)
		console.log(t.val)
		simmetrica(t.dx)
	}
}

function posticipata(t) {
	// VISITA POSTICIPATA
	if (t) {
		posticipata(t.sx)
		posticipata(t.dx)
		console.log(t.val)
	}
}

// Massimo

function maxT(t) {
	if (!t) return -Infinity
	return Math.max(t.val, maxT(t.sx), maxT(t.dx))
}

// Somma

function sumT(t) {
	if (!t) return 0
	return t.val + sumT(t.sx) + sumT(t.dx)
}

// Conta nodi

function contaNodi(t) {
	if (!t) return 0
	return 1 + contaNodi(t.sx) + contaNodi(t.dx)
}

// Contare quanti nodi contengono il valore cercato

function contaK(t, k) {
	if (!t) return 0
	return (t.val===k?1:0)+contaK(t.sx, k)+contaK(t.dx, k)
}

// Scambiare i rami di un albero binario

function scambiaNodi(t) {
	return {val: t.val, sx: t.dx, dx: t.sx}
}

// Tagliare da un albero binario tutti i rami che iniziano da un nodo

function sionTaglialegna(t, k) {
	// https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_3.jpg
	if (t) {
		if (t.val === k) {
			delete t.sx
			delete t.dx
		}
		else {
			sionTaglialegna(t.sx, k)
			sionTaglialegna(t.dx, k)
		}
	}
}

// Massimo in un albero k-ario

function maxK(t) {
	if (!t) return -Infinity
	let maxVal = t.val
	if (t.figli) {
		for (let f of t.figli) {
			maxVal = Math.max(maxVal, maxK(f))
		}
	}
	return maxVal
}

// Stampa

function stampaAk(t) {
	if (t) {
		console.log(t.val)
		if (t.figli) {
			for (let f of t.figli) {
				stampaAk(f)
			}
		}
	}
}

function main() {
    let testtree = {val: 3, sx: {val: 1, sx: {val: 4}, dx: {val: 1, sx: {val: 6}}}, dx: {val: 1, dx: {val: 5}}}
    let ak = {val: 7, figli: [{val: 3, figli: [{val: 12}, {val: 8}]}, {val: 10}, {val: 4}]}
    console.log(testtree)
	sionTaglialegna(testtree, 1)
	console.log(testtree)
}

main()