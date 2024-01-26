class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    static GenerateRandomNode() {
        return new Node(Math.ceil(Math.random() * 1000));
    }
}

class LinkedListIterator {
    constructor(head) {
        this.head = head;
    }
    iterateAndExecuteForwards(func = (x) => console.log(x)) {
        let current = this.head;
        while (current) {
            func(current.value)
            current = current.next;
        }
    }
    iterateAndExecuteBackwards(func = (x) => console.log(x)) {
        let current = this.tail;
        while (current) {
            func(current.value);
            current = current.prev;
        }
    }

    iterateAndExecuteOnce(func = console.log(current)) {
        let current = this.head
        while (current) {
            console.log(current.value)
        }
    }

}

module.exports = {
    Node, LinkedListIterator
}