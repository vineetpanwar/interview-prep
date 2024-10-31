class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    // Enqueue an element into the queue
    enqueue(value) {
        this.stack1.push(value);
    }

    // Dequeue an element from the queue
    dequeue() {
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) {
                throw new Error("Queue is empty");
            }
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    // Get the front element of the queue
    front() {
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) {
                throw new Error("Queue is empty");
            }
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example usage:
const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.front());   // Output: 2
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true