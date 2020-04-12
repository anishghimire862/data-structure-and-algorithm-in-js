import DoublyLinkedListNode from './DoublyLinkedListNode.mjs'

export default class DoublyLinkedList {
  prepend (value) {
    let node = new DoublyLinkedListNode(value, this.head)
    
    if(this.head) {
      this.head.previous = node
    }

    this.head = node

    if(!this.tail) {
      this.tail = node
    }
    return this
  }

  append(value) {
    let node = new DoublyLinkedListNode(value)
    if(!this.head) {
      this.head = node
      this.tail = node

      return this
    }

    this.tail.next = node

    node.previous = this.tail

    this.tail = node

    return this
  }

  delete (value) {
    let deletedNode = null
    let currentNode = this.head

    while(currentNode) {
      if(currentNode.value == value) {
        deletedNode = currentNode

        if(deletedNode == this.head) {
          this.head = deletedNode.next
          if(this.head) {
            this.head.previous = null
          }
  
          if(deletedNode == this.tail) {
            this.tail = null
          }
        } else if (deletedNode == this.tail) {
          this.tail = deletedNode.previous
          this.tail.next = null
        } else {
          let previousNode = deletedNode.previous
          let nextNode = deletedNode.next
          previousNode.next = nextNode
          nextNode.previous = previousNode
        }
      }
      currentNode = currentNode.next
    }
  }

  iterate () {
    let currentNode = this.head
    while(currentNode) {
      console.log(currentNode)
      currentNode = currentNode.next
    }
  }

}

let dd = new DoublyLinkedList()
dd.append(10)
dd.append(20)
dd.append(30)
dd.append(40)
dd.append(50)
dd.prepend(60)

dd.delete(40)

dd.iterate()