class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    addItem(data) {
        if (!this.root) { this.root = new TreeNode(data); return; }
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.data > data) {
                if (currentNode.left)
                    currentNode = currentNode.left;
                else { currentNode.left = new TreeNode(data); return; }
            } else {
                if (currentNode.right)
                    currentNode = currentNode.right;
                else { currentNode.right = new TreeNode(data); return; }
            }
        }
    }
    static TraverseBST(root) {
        if (!root) return;
        this.TraverseBST(root.left);
        console.log(root.data);
        this.TraverseBST(root.right);
    }
}
const bst = new BinarySearchTree();
bst.addItem(85),
    bst.addItem(21),
    bst.addItem(15),
    bst.addItem(21),
    bst.addItem(55),
    bst.addItem(71),
    bst.addItem(51),
    bst.addItem(-1),
    bst.addItem(56),
    bst.addItem(11),
    bst.addItem(85),
    bst.addItem(19),
    bst.addItem(50),
    bst.addItem(12),
    bst.addItem(59),
    bst.addItem(91)
    ;
BinarySearchTree.TraverseBST(bst.root);