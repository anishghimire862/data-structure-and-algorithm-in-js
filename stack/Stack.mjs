import StackClass from './StackClass.mjs'

// implementation of stack based on linked list.
// Push/Pop operations of the stack are similar to 
// prepend/removal from head operations of linked list

export default class Stack {
  push(value) {
    let element = new StackClass(value, this.head)
    this.head = element
    if(!this.tail) {
      this.tail = element
    }
    return this
  }

  pop() {
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

  isEmpty () {
    // the stack is empty if it doesnt have a head
    return !this.head
  }

  peek() {
    // return item on the top of the stack without removing it
    if(this.isEmpty()) {
      return null
    }
    return this.head.value
  }

  iterate () {
    let currentNode = this.head
    while(currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }

  

}

let ss = new Stack()
ss.push(10)
ss.push(20)
ss.push(30)
ss.push(40)
console.log(ss.peek())
