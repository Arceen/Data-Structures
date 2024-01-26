// Multiple ways to make a generic n-ary tree which can have variable number of children
// Ok Method: 
// creating child like firstChild, secondChild, thirdChild, ... etc
// waste of memory, could be unused stuff and not scalable
// Good Method:
// creating dynamic list of child, children = []
// Efficient Method:
// firstChild, similar to dynamic list but it has the benefit of acting like a binary tree as left or right nodes 

class TreeNode {
    constructor(data) {
        this.data = data;
        this.nextSibling = null;
        this.firstChild = null;
    }
}

class GenericTree {
    constructor(root) {
        this.root = root;
    }

    static GenerateRandomGenericTree() {
        // Populating an array of values to push to the tree based on random values
        let root, currentNode;
        root = new TreeNode(Math.random() * 1000);
        currentNode = root.firstChild = new TreeNode(Math.random() * 1000);
        for (let n = 0; n < 2 + Math.random() * 5; n++) {
            let currentChild = currentNode.firstChild = new TreeNode(Math.random() * 1000)
            for (let i = 0; i < 4 * Math.random() * 5; i++) {
                currentChild = currentChild.nextSibling = new TreeNode(Math.random() * 1000)
            }
            currentNode = currentNode.nextSibling = new TreeNode(Math.random() * 1000);
        }
        return new GenericTree(root)
    }

    static TraverseTreeAndExecuteFunction(root, func = (node) => node ? console.log(node.data) : console.log(null)) {
        func(root);
        root.firstChild ? GenericTree.TraverseTreeAndExecuteFunction(root.firstChild) : null;
        root.nextSibling ? GenericTree.TraverseTreeAndExecuteFunction(root.nextSibling) : null;
    }
}
const genericTree = GenericTree.GenerateRandomGenericTree();
console.table(genericTree.root);
GenericTree.TraverseTreeAndExecuteFunction(genericTree.root);