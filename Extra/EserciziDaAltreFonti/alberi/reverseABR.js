/*
    Dato un albero binario di ricerca, costruire un nuovo albero binario di ricerca con gli stessi nodi ma con i figli invertiti (cioè, il figlio sinistro diventa il figlio destro e viceversa).

    Esempio:
    Input:
          4
         / \
        2   6
       / \ / \
      1  3 5  7

    Output:
          4
         / \
        6   2
       / \ / \
      7  5 3  1
*/

function reverseABR(T) {
    if (!T) return null;

    return {
        val: T.val,
        sx: reverseABR(T.dx),
        dx: reverseABR(T.sx)
    };
}

function main() {
    const tree = {
        val: 4,
        sx: {
            val: 2,
            sx: { val: 1 },
            dx: { val: 3 }
        },
        dx: {
            val: 6,
            sx: { val: 5 },
            dx: { val: 7 }
        }
    };

    const reversed = reverseABR(tree);
    console.log("Original Tree:", JSON.stringify(tree, null, 2));
    console.log("Reversed Tree:", JSON.stringify(reversed, null, 2));
}

if (typeof require !== 'undefined' && require.main === module) {
    main();
}
