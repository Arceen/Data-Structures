const { Node, LinkedListIterator } = require("./utils")
class SinglyLinkedList extends LinkedListIterator {
    constructor(head) {
        super(head)
        this.head = head;
    }
    static GenerateSinglyLinkedListFromArray(arr) {
        if (arr.length < 1) return null;
        let head = new Node(arr[0]);
        let current = head;
        let i = 0;
        while (++i < arr.length) {
            current = current.next = new Node(arr[i]);
        }
        return new SinglyLinkedList(head);
    }
    // Generates N linked list items
    static GenerateSinglyLinkedListRandom(N) {
        if (N < 1) return null;
        let head = Node.GenerateRandomNode();
        let current = head;
        let i = 0
        while (++i < N) {
            current = current.next = Node.GenerateRandomNode();
        }
        return new SinglyLinkedList(head);
    }
}


const sll = SinglyLinkedList.GenerateSinglyLinkedListRandom(6);
sll.iterateAndExecuteForwards()
const sll2 = SinglyLinkedList.GenerateSinglyLinkedListFromArray([1, 2, 4, 3, 7, 8, -1])
sll2.iterateAndExecuteForwards()