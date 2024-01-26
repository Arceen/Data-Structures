class TreeNode {
    constructor(data = Math.floor(Math.random() * 1000)) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    static GenerateBinaryTree(lvl = 4) {
        if (lvl < 1) return null;
        const root = new TreeNode()
        root.left = BinaryTree.GenerateBinaryTree(lvl - 1);
        root.right = BinaryTree.GenerateBinaryTree(lvl - 1);
        return root
    }
    static TraverseBinaryTree(root, func = (node) => { node ? console.log(node.data) : console.log(null) }) {
        if (!root) return;
        func(root);
        root.left ? BinaryTree.TraverseBinaryTree(root.left) : null;
        root.right ? BinaryTree.TraverseBinaryTree(root.right) : null;
    }
}

BinaryTree.TraverseBinaryTree(BinaryTree.GenerateBinaryTree())