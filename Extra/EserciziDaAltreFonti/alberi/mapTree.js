function map_tree_nested(tree, sx, dx) {
    if (!tree) return null

    if (tree.sx)
        tree.sx.val = sx(tree.sx.val)
    if (tree.dx)
        tree.dx.val = dx(tree.dx.val)
    
    map_tree_nested(tree.sx, sx, dx)
    map_tree_nested(tree.dx, sx, dx)
}

function map_tree(tree, sx, dx) {
    if (tree) {
        tree.val = dx(tree.val)
        map_tree_nested(tree, sx, dx)
    }
}

function main() {
    let testtree = {val: 5, sx: {val: 2, sx: {val: 1}}, dx: {val: 7, dx: {val: 8}}}
    map_tree(testtree, (x) => (x+1), (x) => (x+2))
    console.log(testtree)
}

main()