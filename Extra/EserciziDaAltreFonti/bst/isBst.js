function maxNode(tree) {
    if (tree === null){
        return -Infinity;
    }

    return Math.max(tree.val, Math.max(
        maxNode(tree.sx),
        maxNode(tree.dx)))
}

function minNode(tree) {
    if (tree === null){
        return Infinity;
    }

    return Math.min(tree.val, Math.min(
        minNode(tree.sx),
        minNode(tree.dx)))
}

function checkBST(tree) {
    if (tree === null) {
        return true;
    }

    // Il massimo del sottoalbero sinistro deve essere <= al valore del nodo
    // (valori uguali vanno a sinistra)
    if (tree.sx !== null && maxNode(tree.sx) > tree.val) {
        return false;
    }

    // Il minimo del sottoalbero destro deve essere > al valore del nodo
    if (tree.dx !== null && minNode(tree.dx) <= tree.val) {
        return false;
    }

    // Controllo ricorsivo sui sottoalberi
    return checkBST(tree.sx) && checkBST(tree.dx);
}

// Esempi di test
let t1 = {
    val: 10,
    sx: { val: 5, sx: null, dx: null },
    dx: { val: 15, sx: null, dx: null }
};
console.log(checkBST(t1)); // true

let t2 = {
    val: 10,
    sx: { val: 15, sx: null, dx: null }, // Errore: 15 > 10 a sinistra
    dx: { val: 20, sx: null, dx: null }
};
console.log(checkBST(t2)); // false

let t3 = {
    val: 10,
    sx: { val: 10, sx: null, dx: null }, // Ok: 10 <= 10 a sinistra
    dx: { val: 20, sx: null, dx: null }
};
console.log(checkBST(t3)); // true
