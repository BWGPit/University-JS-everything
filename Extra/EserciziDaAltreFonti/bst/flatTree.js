function flattenTree(tree) {
    const result = [];

    function inOrder(node) {
        if (node === null) {
            return;
        }
        inOrder(node.sx);
        result.push(node.val);
        inOrder(node.dx);
    }

    inOrder(tree);
    return result;
}

// Esempi di test
let t = {
    val: 10,
    sx: {
        val: 5,
        sx: { val: 2, sx: null, dx: null },
        dx: { val: 7, sx: null, dx: null }
    },
    dx: {
        val: 15,
        sx: null,
        dx: { val: 20, sx: null, dx: null }
    }
};

console.log(flattenTree(t)); // [2, 5, 7, 10, 15, 20]
console.log(flattenTree(null)); // []
