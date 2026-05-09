interface TreeNode {
    val: (x: number) => number
    left?: TreeNode
    right?: TreeNode
}

function visitaFunzioni(tree?: TreeNode|null, v?: number): number|undefined {
    // Caso base
    if (!tree) {return v}
    
    v = visitaFunzioni(tree.left, v)
    v = visitaFunzioni(tree.right, v)
    v = tree.val(v?v:0)
    //console.log(v)
    return v
}

let testTree: TreeNode = {val: (x => x + 2), left: {val: (x => x * 3)}, right: {val: (x => x - 1)}}
console.log(visitaFunzioni(testTree, 5))
console.log(visitaFunzioni(testTree, 10))
console.log(visitaFunzioni(null, 5))