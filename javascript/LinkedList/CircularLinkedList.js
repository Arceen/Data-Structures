const { Node, LinkedListIterator } = require("./utils")
class CircularLinkedList extends LinkedListIterator {
    constructor(head) {
        super(head)
        this.head = head;
    }
    static GenerateCircularLinkedListFromArray(arr) {
        if (arr.length < 1) return null;
        let head = new Node(arr[0]);
        let current = head;
        let i = 0;
        while (++i < arr.length) {
            current = current.next = new Node(arr[i])
        }
        current.next = head;
        return new CircularLinkedList(head);
    }
    // Generates N linked list items
    static GenerateCircularLinkedListRandom(N) {
        if (N < 1) return null;
        let head = Node.GenerateRandomNode();
        let current = head;
        let i = 0
        while (++i < N) {
            current = current.next = Node.GenerateRandomNode();
        }
        current.next = head;
        return new CircularLinkedList(head);
    }
}
const cll = CircularLinkedList.GenerateCircularLinkedListRandom(6);
cll.iterateAndExecuteForwards()
const cll2 = CircularLinkedList.GenerateCircularLinkedListFromArray([1, 2, 4, 3, 7, 8, -1])
cll2.iterateAndExecuteForwards()
