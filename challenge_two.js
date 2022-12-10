// class Node:
// tagName: Optional[str] # the name of the HTML tag represented in this node
// text: Optional[str] # the text within this HTML tag
// children: List[‘Node'] # the list of nodes immediately within (children of) this HTML tag
// attributeMap: Dict[str, str] # dictionary of (key, value) pairs of attributes in this HTML
// tag
// parent: Optional['Node'] # parent node for this HTML tag

class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BST {
  constructor() {
      this.root = null;
  }

}



function test() {
  let myBST = new BST();

  if (myBST.root === null) {
      console.log("Root: null");
  } else {
      console.log("Root:", myBST.root.value);
  }
}


test();