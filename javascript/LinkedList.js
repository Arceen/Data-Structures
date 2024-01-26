class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    print() {
        console.log(this.value);
    }
    static GenerateRandomNode() {
        return new Node(Math.ceil(Math.random() * 1000));
    }
}


class LinkedList {
    constructor(head) {
        this.head = head;
    }
    static GenerateLinkedListFromArray(arr) {
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
        head.prev = current;
        return new LinkedList(head);
    }
    // Generates N linked list items
    static GenerateLinkedListRandom(N) {
        if (N < 1) return null;
        let head = Node.GenerateRandomNode();
        let current = head;
        let i = 0
        while (++i < N) {
            current = current.next = Node.GenerateRandomNode();
        }
        return new LinkedList(head);
    }
    iterateAndExecuteForwards(func = (x) => console.log(x)) {
        let current = this.head;
        while (current) {
            func(current.value)
            current = current.next;
        }
    }
    iterateAndExecuteBackwards(func = (x) => console.log(x)) {
        let current = this.head;
        while (current) {
            func(current.value);
            current = current.prev;
        }
    }
    print() {
        let current = this.head
        while (current) {
            current.print();
            current = current.next;
        }
    }
}


// const ll = LinkedList.GenerateLinkedListRandom(6);
// ll.print()
const ll2 = LinkedList.GenerateLinkedListFromArray([1, 2, 4, 3, 7, 8, -1])
// ll2.iterateAndExecuteForwards()
ll2.iterateAndExecuteBackwards()