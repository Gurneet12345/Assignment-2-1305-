class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CustomLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }
        console.log(result + 'null');
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) return null;

        const newNode = new Node(value);
        if (index === 0) {
            this.prepend(value);
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            newNode.next = current;
            previous.next = newNode;
            this.size++;
        }
    }

    removeFirst() {
        if (!this.head) return null;

        const removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode.value;
    }

    removeLast() {
        if (!this.head) return null;

        if (!this.head.next) {
            const removedNode = this.head;
            this.head = null;
            this.size--;
            return removedNode.value;
        }

        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
        this.size--;
        return current.value;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) return null;

        if (index === 0) return this.removeFirst();

        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
        this.size--;
        return current.value;
    }

    search(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }

        return false;
    }

    updateAt(value, index) {
        if (index < 0 || index >= this.size) return null;

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.value = value;
    }

    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.head = previous;
    }

    removeDuplicates() {
        let current = this.head;
        while (current && current.next) {
            if (current.value === current.next.value) {
                current.next = current.next.next;
                this.size--;
            } else {
                current = current.next;
            }
        }
    }

    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow.value;
    }

    getSize() {
        return this.size;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    toArray() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

    findNthFromEnd(n) {
        if (n <= 0 || n > this.size) return null;

        let mainPtr = this.head;
        let refPtr = this.head;

        for (let i = 0; i < n; i++) {
            refPtr = refPtr.next;
        }

        while (refPtr) {
            mainPtr = mainPtr.next;
            refPtr = refPtr.next;
        }

        return mainPtr.value;
    }

    isEmpty() {
        return this.size === 0;
    }
}

// Test the CustomLinkedList class
const myList = new CustomLinkedList();
myList.prepend(100);
myList.prepend(200);
myList.prepend(300);
myList.insertAt(150, 2);
myList.updateAt(250, 3);
myList.append(350);
myList.append(400);

console.log("Initial List:");
myList.printList();

console.log("Removed last:", myList.removeLast());
myList.printList();

console.log("Removed first:", myList.removeFirst());
myList.printList();

console.log("List contains 250:", myList.search(250));

console.log("List size:", myList.getSize());

console.log("Nth from end (2):", myList.findNthFromEnd(2));

myList.reverse();
console.log("Reversed List:");
myList.printList();

console.log("List as array:", myList.toArray());

myList.clear();
console.log("List after clear, is empty:", myList.isEmpty());
