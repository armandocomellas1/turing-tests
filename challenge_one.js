class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }
  insert(node) {
    //your code here
    const newNode = new Node(node)
    if (this.root === null) {
        this.root = newNode
        return this
    }
    let temp = this.root
    while(true) {
        if (newNode.node < temp.node) {
            if (temp.left === null) {
                temp.left = newNode
                return this
            }
            temp = temp.left
        } else {
            if (temp.right === null) {
                temp.right = newNode
                return this
            }
            temp = temp.right
        }
    }
  }

  preOrder(node = this.root) {
    //implementation from the previous challenge
  console.log(node)

  }
}


function binarySearchTree(array) {
  const tree = new BST()
  array.forEach(e => tree.insert(new Node(e)))
  return tree.preOrder()
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]))
// => "8 3 1 6 4 7 10 14 13"

module.exports = binarySearchTree
