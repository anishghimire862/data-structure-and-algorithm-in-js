import QueueClass from './QueueClass.mjs'
export default class Queue {
  enqueue(value) {
    let element = new QueueClass(value)
    if(!this.head) {
      this.head = element
      this.tail = element

      return this
    }
    this.tail.next = element
    this.tail = element

    return this
  }

  dequeue() {
    if(!this.head) {
      return null
    }

    let deletedHead = this.head

    if(this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }
    return deletedHead
  }

  iterate () {
    let currentNode = this.head
    while(currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

let qq = new Queue()
qq.enqueue(10)
qq.enqueue(20)
qq.enqueue(30)
qq.enqueue(40)
qq.dequeue()
qq.iterate()
