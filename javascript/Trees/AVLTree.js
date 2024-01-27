// AVL is a BST that is more balanced
// Requires more processing for insertion and shifting the tree
// Most important thing to remember is that shifting happens between 3 nodes
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class AVLTree {
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
                else {
                    currentNode.left = new TreeNode(data);
                    console.log(data);
                    this.processAVLTree(this.root);
                    return;
                }
            } else {
                if (currentNode.right)
                    currentNode = currentNode.right;
                else {
                    currentNode.right = new TreeNode(data);

                    console.log(data);
                    this.processAVLTree(this.root)

                    return;
                }
            }
        }

    }
    rotateTree(node) {
        console.log("rotating")
        if (node.left && node.left.left) {
            //LL rotation
            let temp = node.left.left;
            node.left.left = null;
            temp.left = node.left;
            node.left = null;
            temp.right = node;
            node = temp;
            console.log(node)
        }
        // else if (node.right && node.right.right) {
        //     //RR rotation
        //     let temp = node.right;
        //     node.left = node;
        //     node.right = node.right.right;
        //     node = temp;
        // } else if (node.left && node.left.right) {
        //     let temp = node;
        //     node.left.right = node.left.right.left;
        //     node.left = node.left.right.right;
        //     node = node.left.right;
        //     node.right = temp;
        // } else {
        //     let temp = node;
        //     node.right.left = node.right.left.right;
        //     node.right = node.right.left.left;
        //     node = node.right.left;
        //     node.left = temp;
        // }
    }
    processAVLTree(node) {
        if (!node) return 0
        else if (!node.left && !node.right) return 1
        let leftHeight = this.processAVLTree(node.left)
        let rightHeight = this.processAVLTree(node.right)
        console.log(leftHeight - rightHeight);
        if (Math.abs(leftHeight - rightHeight) > 1) {

            this.rotateTree(node);
            return Math.max(leftHeight, rightHeight);
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }
    GetMaxHeightOfTreeNode(node) {
        if (!node) return 0;
        return 1 + Math.max(AVLTree.GetMaxHeightOfTreeNode(node.left), AVLTree.GetMaxHeightOfTreeNode(node.right))
    }

    static TraverseBST(root) {
        if (!root) return;
        this.TraverseBST(root.left);
        console.log(root.data);
        this.TraverseBST(root.right);
    }
}
const avl = new AVLTree();
avl.addItem(85),
    avl.addItem(21),
    avl.addItem(15);
console.log(avl.root);
AVLTree.TraverseBST(avl.root);