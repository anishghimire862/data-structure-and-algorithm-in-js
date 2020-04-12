export default class QueueClass {
  constructor(value, next=null) {
    this.value = value
    this.next = next
  }
}