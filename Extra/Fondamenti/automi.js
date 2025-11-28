/*
Automi a stati finiti deterministici (copyright 2025 BWGPit | IF YOU FORK THIS REPO, YOU ACCEPT TO STAN QWER)
*/

function validate(automaton) {
    // O(n)
    // Verifica che lo stato di un automa sia elemento di S insieme degli stati
    if (!automaton.S[automaton.state]) return false
    // Verifica che F sia un sottoinsieme di S
    for (let x in automaton.F) {
        if (!automaton.S[x]) return false
    }
    return true
}

function validString(alphabet, w) {
    // O(n)
    // Verifica che la stringa w sia composta solo da caratteri di alphabet
    let isvalid = true
    let i = 0
    while (isvalid && i < w.length) {
        isvalid = !!alphabet[w[i]]  // !! = NOT NOT: shorthand per controllare se c'è w[i] in alphabet
        i++
    }
    return isvalid
}

function read(automaton, alphabet, w) {
    // Legge e valida una stringa se l'automa è valido
    let validPremises = validate(automaton) && validString(alphabet, w)
    if (validPremises) {
        let valid = true
        let i = 0
        while (valid && i < w.length) { // Simula il ciclo di un automa: se non c'è il default case, si blocca
            automaton.state = automaton.T(w[i], automaton.state)
            valid = !!automaton.state // if (!automaton.state) valid = false
            i++
        }
        valid = !!(automaton.F[automaton.state])    // Se dunque lo stato è tra gli stati finali, assume true: accetta la stringa; altrimenti non la accetta
        return valid
    }
    else {
        console.log("Invalid automaton or alphabet")
        return true // Le premesse sono false: la conclusione è vera (implicazione)
    }
}

function main() {
    // Esempio: automa che accetta solo QWER in questo ordine ripetuto n volte
    let esempioAlfabeto = {"q": 1, "w": 1, "e": 1, "r": 1}  // Definito come insieme
    let esempioAutoma = {state: "BWG", S: {"BWG": 1, "Q": 1, "W": 1, "E": 1, "R": 1}, T: (a, x) => {
        switch ("("+String(a)+", "+String(x)+")") {
            case "(q, BWG)":
                return "Q"
            case "(q, R)":
                return "Q"
            case "(w, Q)":
                return "W"
            case "(e, W)":
                return "E"
            case "(r, E)":
                return "R"
            default:
                return "BWG"
        }
        return null
    }, F: {"R": 1}}
    console.log(read(esempioAutoma, esempioAlfabeto, "qwerqwer"))
    console.log(esempioAutoma.state)
}

if (require.main === module) main()