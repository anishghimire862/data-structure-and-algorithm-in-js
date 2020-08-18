class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    this.root === null ? this.root = newNode : this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if(newNode.data < node.data) {
      node.left === null ? node.left = newNode : this.insertNode(node.left, newNode);
    } else {
      node.right === null ? node.right = newNode : this.insertNode(node.right, newNode);
    }
  }

  inorder(node) {
    if(node !== null) {
      this.inorder(node.left);
      console.log(node.data); 
      this.inorder(node.right);
    }
  }

  getRootNode () {
    return this.root;
  }
}

let BST = new BinarySearchTree();
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 

let root = BST.getRootNode();
BST.inorder(root);