type ListNode = {
    val: number | null,
    next: ListNode | null
}

class MyLinkedList {
    headPoint:ListNode = {
        val: null,
        next: null
    }
    constructor() {
    }

    get(index: number): number {
        let cur = this.headPoint.next;
        let count = 0;
        while (cur !== null) {
            if (count === index) {
                return cur.val!;
            }
            count++;
            cur = cur.next;
        }
        return -1;
    }

    addAtHead(val: number): void {
        const next = this.headPoint.next;
        this.headPoint.next = {
            val,
            next
        }
    }

    addAtTail(val: number): void {
        let cur = this.headPoint;
        while (cur.next !== null) {
            cur = cur.next;
        }
        cur.next = {
            val,
            next: null,
        }
    }

    addAtIndex(index: number, val: number): void {
        let cur = this.headPoint;
        let count = 0;
        while (cur.next !== null && count < index) {
            cur = cur.next;
            count++;
        }
        if (count === index) {
            const next = cur.next;
            cur.next = {
                val,
                next,
            }
        }
    }

    deleteAtIndex(index: number): void {
        let cur = this.headPoint;
        let count = 0;
        while (cur.next !== null && count < index) {
            cur = cur.next;
            count++;
        }
        if (count === index && cur.next) {
            const next = cur.next.next;
            cur.next = next;
        }
    }
}

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
// console.log(myLinkedList.get(0));  
myLinkedList.deleteAtIndex(0);
console.log(myLinkedList.get(0));  
myLinkedList.addAtTail(2);    // 链表变为 1->2
// console.log(myLinkedList.get(0));              // 返回 2