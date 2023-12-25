const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (node === null) {
        return new Node(data);
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }



  findNode(node, data) {
    if (node === null || node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this.findNode(node.left, data);
    } else {
      return this.findNode(node.right, data);
    }
  }

  has(data) {
    return this.findNode(this.rootNode, data) !== null;
  }

  find(data) {
    const result = this.findNode(this.rootNode, data);
    return result;
  }



  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (node === null) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
      } else {
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

      }

      return node;
    }
  }



  min() {
    const minNode = getMin(this.rootNode);
    return minNode ? minNode.data : null;

    function getMin(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }
  }



  max() {
    const maxNode = getMax(this.rootNode);
    return maxNode ? maxNode.data : null;

    function getMax(node) {
      while (node.right !== null) {
        node = node.right;
      }
      return node;
    }
  }


}

module.exports = {
  BinarySearchTree
};