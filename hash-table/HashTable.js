import LinkedList from '../sll/LinkedList.js';

const defaultHashTableSize = 32;

export default class HashTable {
  constructor (hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
    this.keys = {}
  }

  hash (key) {
    // Array.from() creates a new, shallow-copied Array instance.
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)), 
      0
    );

    return hash % this.buckets.length;
  }

  set (key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
    !node ? bucketLinkedList.append({ key, value }) : node.value.value = value
  }

  get (key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
    return node ? node.value.value : undefined;
  }

  delete (key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    if(node) {
      return bucketLinkedList.remove(node.value);
    }
    return null
  }

  getKeys() {
    return Object.keys(this.keys);
  }

}

let hashTable = new HashTable();
hashTable.set('Anish', '980000000');
hashTable.set('Prakash', '3456789888');
hashTable.set('Prakash', '345444444');
// hashTable.delete('Anish');
console.log(hashTable.getKeys());
console.log(hashTable.get('Prakash'));