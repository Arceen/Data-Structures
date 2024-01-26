const { Node, LinkedListIterator } = require("./utils")
class DoublyLinkedList extends LinkedListIterator {
    constructor(head, tail) {
        super(head, tail)
        this.head = head;
        this.tail = tail;
    }
    static GenerateDoublyLinkedListFromArray(arr) {
        if (arr.length < 1) return null;
        let head = new Node(arr[0]);
        let current = head;
        let i = 0;
        while (++i < arr.length) {
            let nextNode = new Node(arr[i]);
            current.next = nextNode;
            current.next.prev = current;
            current = current.next;
        }

        return new DoublyLinkedList(head, current);
    }
    // Generates N linked list items
    static GenerateDoublyLinkedListRandom(N) {
        if (N < 1) return null;
        let head = Node.GenerateRandomNode();
        let current = head;
        let i = 0
        while (++i < N) {
            const nextNode = Node.GenerateRandomNode();
            current.next = nextNode;
            current.next.prev = current;
            current = current.next;
        }

        return new DoublyLinkedList(head, current);
    }
}
// const dll = DoublyLinkedList.GenerateDoublyLinkedListRandom(6);
// dll.iterateAndExecuteBackwards();
// dll.iterateAndExecuteForwards()
const dll2 = DoublyLinkedList.GenerateDoublyLinkedListFromArray([1, 2, 4, 3, 7, 8, -1])
dll2.iterateAndExecuteForwards()
dll2.iterateAndExecuteBackwards()
