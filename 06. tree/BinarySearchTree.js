class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let newNode = new Node(key);
  
    if(this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  
  }

  insertNode(node, newNode) {
    if(newNode.key < node.key){
      if(node.left === null) {
        node.left = newNode;
      }else{
        this.insertNode(node.left, newNode);
      }
    }else{
      if(node.right === null) {
        node.right = newNode;
      }else{ 
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 중위 순회는 BTS의 노드를 오름차순, 즉 작은 값에서 큰 값 방향으로 방문한다. 트리 정렬 시 사용되는 방법이다. 구현 로직을 살펴보자
  inOrderTraverse(callback) {
    this.inOderTraverseNode(this.root, callback);
  }

  inOderTraverseNode(node, callback){
    if(node !== null) {
      this.inOderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOderTraverseNode(node.right, callback);
    }
  }

  printNode(value) {
    console.log(value)
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if(node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if(node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    if(node) {
      while(node && node.left !== null) {
        node = node.left;
      }

      return node.key;
    }

    return null;
  }

  findMinNode(node) {
    if(node) {
      while(node && node.left !== null) {
        node = node.left;
      }

      return node;
    }

    return null;
  }
  
  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    if(node) {
      while(node && node.right !== null) {
        node = node.right;
      }

      return node.key;
    }

    return null;
  }

  
  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if(node === null){
      return null;
    }

    if(key < node.key) {
      return this.searchNode(node.left, key);
    }else if(key > node.key) {
      return this.searchNode(node.right, key);
    }else{
      return node;
    }
  }

  remove(key) {
    return this.removeNode(this.root, key);
  }

  removeNode(node, key){
    if(node === null) {
      return null;
    }

    if(key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    }else if(key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    }else{

      //경우 #1의 - 경우 리프노드 
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      } 

      // 경우 #2 - 자식이 하나뿐인 노드
      if(node.left === null) {
        node = node.right;
        return node;
      } else if(node.right === null) {
        node = node.left;
        return node;
      } 
      
      // 경우 3 - 자식이 둘인 노드 자식이 둘일때는 오른쪽에서 제일 작은것을 가져와서 key를 바꾸고 
      var aux = this.findMinNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }

  } 
}

var tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(15);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

// console.log(tree);
tree.remove(11);
// tree.inOrderTraverse(tree.printNode); 
console.log(tree);
// tree.preOrderTraverse(tree.printNode); 
// tree.postOrderTraverse(tree.printNode);