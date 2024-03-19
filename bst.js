class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  }

  // Search for a value
  search(value) {
    if (!this.root) return false;

    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(current);
    return data;
  }

  DFSInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  // My solution for DFSInOrder
  // DFSInOrder2(){
  //     let data = [];
  //     let current = this.root;

  //     function traverse(node){
  //         if(node.left) traverse(node.left);
  //         data.push(node.value);
  //         if(node.right) traverse(node.right);
  //     }

  //     traverse(current);
  //     return data;
  // }
}

// let aa = [5, 3, 8, 4, 1, 6];

let tree = new BinarySearchTree();

// console.log(tree);

// aa.forEach((item) => {
//   tree.insert(item);
// });

// console.log(tree.search(3));

let array1 = [3, 5, 8];
let array2 = [2, 7, 9];

array1.forEach((item) => {
  tree.insert(item);
});


array2.forEach((item) => {
    console.log(tree.search(item))
});
// function mergeSortedArrays(arr1, arr2) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }

//   return result;
// }
