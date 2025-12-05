// soluzione di Andrea

function maptree (tree, fundx, funsx) {
    // se non esiste un nodo allora non fare nulla 
    if (!tree) return undefined;
    // creiamo un nuovo albero partendo dalla radice
    // sapendo che per l'esercizio la radine è un nodo destro allora
    // creo un nodo assegnando come newtree.val fundx(tree.val)
    let newtree = {val: fundx(tree.val)};
    // funzione ricorsiva
    /**
     * 
     * @param {*} tree 
     * @param {*} newtree 
     * @param {*} fundx 
     * @param {*} funsx 
     * @returns 
     */
    function applytoTree(tree, newtree,fundx, funsx) {
        // se esiste un figlio sinistro allora ci vado a lavorare
        if (tree.sx) {
            // assegno a newtree.sx il valore con applicata la funzione sinistra
            newtree.sx = {val: funsx(tree.sx.val)};
            // chiamata ricorsiva per lavorare sul figlio sinistro di tree
            // (stiamo andando in profondità nell'albero)
            applytoTree(tree.sx, newtree.sx, fundx, funsx);
        } 
        // se non c'è più figli sinistri basta
        else {
            return
        }
        // se il nodo ha un figlio destro allora lavoro su quel nodo
        if (tree.dx) {
            // assegnamento a newtree.dx fundx(tree.dx.val)
            newtree.dx = {val: fundx(tree.dx.val)};
            // chiamata ricorsiva per lavorare sul nodo destro trovato
            applytoTree(tree.dx, newtree.dx, fundx, funsx);
        } 
        // se non trovo più figli destri basta mi fermo
        else {
            return
        }
    }
    // fine definizione funzione ricorsiva
    // chiama funzione ricorsiva
    applytoTree(tree, newtree, fundx, funsx);
    // return del nuovo albero
    return newtree;

}

// Test cases in a main
if (typeof require !== 'undefined' && require.main === module) {
    // Helper to pretty print trees
    const show = (label, obj) => {
        console.log(label + ":", JSON.stringify(obj, null, 2));
    };

    // Tree sample:
    //        10
    //       /  \
    //      5    20
    //     / \   / \
    //    2  7  15  25
    const tree = {
        val: 10,
        sx: {
            val: 5,
            sx: { val: 2 },
            dx: { val: 7 }
        },
        dx: {
            val: 20,
            sx: { val: 15 },
            dx: { val: 25 }
        }
    };

    // Functions: left multiplies by 2, right adds 1
    const funsx = x => x * 2;
    const fundx = x => x + 1;

    const mapped = maptree(tree, fundx, funsx);
    show("Original", tree);
    show("Mapped", mapped);

    // Sanity checks
    console.log("Assertions:");
    console.log("Root val should be 11:", mapped.val === 11);
    console.log("Left child val should be 10:", mapped.sx && mapped.sx.val === 10);
    console.log("Right child val should be 21:", mapped.dx && mapped.dx.val === 21);
    console.log("Left-left should be 4:", mapped.sx && mapped.sx.sx && mapped.sx.sx.val === 4);
    console.log("Right-right should be 26:", mapped.dx && mapped.dx.dx && mapped.dx.dx.val === 26);
}