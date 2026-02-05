/*
Un nodo u di un albero binario è detto “centrale” se la dimensione del sottoalbero di cui è radice u è pari alla somma delle chiavi dei nodi che appartengono al percorso dalla radice al nodo u stresso.
Progettare un algoritmo che, dato un albero binario, stampi le chiavi dei suoi nodi centrali.
*/

function nodiCentrali(u, s) {
    if (!u) return 0
    s += u.val;
    let dims = nodiCentrali(u.sx, s)
    let dimd = nodiCentrali(u.dx, s)
    if (1+dims+dimd == s) console.log(u.val)
    return 1+dims+dimd
}

function main() {
    //        1
    //       /  \
    //      2    20
    //     / \   / \
    //    2  7  15  25
    const tree = {
        val: 1,
        sx: {
            val: 2,
            sx: { val: 2 },
            dx: { val: 7 }
        },
        dx: {
            val: 20,
            sx: { val: 15 },
            dx: { val: 25 }
        }
    }
    nodiCentrali(tree, 0)
}

if (require.main === module) main()