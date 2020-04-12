import LinkedListNode from './LinkedListNode.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  prepend(value) {
    let newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    
    if(!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  remove(value) {
    let currentNode = this.head;
    let deletedNode = null;

    if(this.head.value === value) {
      deletedNode = this.head.value
      this.head = currentNode.next;
    }

    if(currentNode !== null) {
      while(currentNode.next) {
        if(currentNode.next.value === value) {
          deletedNode = currentNode.next.value;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    return deletedNode;
  }

  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }



  fromArray(values) {
    values.forEach(value => this.append(value));
    return this;
  }

  reverse () {
    let currentNode = this.head;
    let previousNode = null;
    let nextNode = null;

    while(currentNode) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = previousNode;

    return this;
  }

  iterate() {
    let currentNode = this.head;
    while(currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

// let ll = new LinkedList();

// ll.append(10);
// ll.append(20);
// ll.append(30);
// ll.append(40);
// let values = [40,30,20,10];
// ll.fromArray(values)
// console.log('Deleted node ' + ll.remove(50));
// ll.reverse();
// ll.iterate();