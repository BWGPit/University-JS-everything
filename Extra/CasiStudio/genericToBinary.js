// Non un esercizio ma un caso di studio
// Input: un albero k-ario
// Output: la binarizzazione dell'albero k-ario in input
// fonte del codice: https://www.naukri.com/code360/library/convert-a-generic-tree-n-ary-tree-to-binary-tree

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.children = [];
    }
}

function genericToBinary(root) {
    if (!root || root.children.length === 0) {
        return root;
    }

    root.left = genericToBinary(root.children[0]);

    if (root.children.length > 1) {
        root.right = genericToBinary(root.children[1]);
    }

    let rightNode = root.right;
    for (let i = 2; i < root.children.length; i++) {
        while (rightNode && rightNode.left) {
            rightNode = rightNode.left;
        }
        rightNode.left = genericToBinary(root.children[i]);
    }

    return root;
}

function printTree(root) {
    if (!root) return;
    process.stdout.write(root.data + " ");
    printTree(root.left);
    printTree(root.right);
}

const root = new TreeNode(5);
root.children.push(new TreeNode(8));
root.children.push(new TreeNode(2));
root.children.push(new TreeNode(1));

root.children[0].children.push(new TreeNode(3));
root.children[0].children.push(new TreeNode(4));

root.children[1].children.push(new TreeNode(20));
root.children[1].children.push(new TreeNode(25));

const binaryTree = genericToBinary(root);
printTree(binaryTree);
console.log(binaryTree);