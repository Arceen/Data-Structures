const { Node, LinkedListIterator } = require("./utils")
class DoublyCircularLinkedList extends LinkedListIterator {
    constructor(head, tail) {
        super(head, tail)
        this.head = head;
        this.tail = tail;
    }
    static GenerateDoublyCircularLinkedListFromArray(arr) {
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
        current.next = head;
        head.prev = current;
        return new DoublyCircularLinkedList(head, current);
    }
    // Generates N linked list items
    static GenerateDoublyCircularLinkedListRandom(N) {
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
        head.prev = current;
        current.next = head;
        return new DoublyCircularLinkedList(head, current);
    }
}
const dcll = DoublyCircularLinkedList.GenerateDoublyCircularLinkedListRandom(6);
dcll.iterateAndExecuteBackwards();
// dcll.iterateAndExecuteForwards()
// const dcll2 = DoublyCircularLinkedList.GenerateDoublyCircularLinkedListFromArray([1, 2, 4, 3, 7, 8, -1])
// dcll2.iterateAndExecuteForwards()
// dcll2.iterateAndExecuteBackwards()
