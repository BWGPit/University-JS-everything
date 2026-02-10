function findNode(n, v) {
    if (n.v === v) {
        return n;
    }
    for (let child of n.figli) {
        let result = findNode(child, v);
        if (result) {
            return result;
        }
    }
    return null;
}

function innesta(T1, v1, T2, v2) {
    let nodo1 = findNode(T1, v1);
    let nodo2 = findNode(T2, v2);
        let temp = nodo1.val;
        nodo1.val = nodo2.val;
        nodo2.val = temp;
        let tempfigli = nodo1.figli;
        nodo1.figli = nodo2.figli;
        nodo2.figli = tempfigli;
}