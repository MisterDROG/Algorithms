class LinkedList {
    constructor() {
        this.size = 0
        this.root = null
    }

    add(value) {
        if (this.size == 0) {
            this.root = new Node(value)
            this.size += 1
            return true
        }
        let node = this.root
        while (node.next) {
            node = node.next
        }
        this.size += 1
        let newNode = new Node(value)
        node.next = newNode
    }

    getSize() {
        return this.size
    }

    print() {
        let result = []
        let node = this.root
        while (node) {
            result.push(node.value)
            node = node.next
        }
        console.log(result)
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let list = new LinkedList
list.add(5)
list.add(10)
list.add(12)
list.add(3)
list.add(-5)
list.add(0)

list.print()