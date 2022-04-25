  //const { NotImplementedError } = require('../extensions/index.js');

  //const { Node } = require('../extensions/list-tree.js');
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  class BinarySearchTree {
    constructor(){
      this.rootNode = null;
    }

    root() {
      return this.rootNode;
    }

    add(data) {
      this.rootNode = addWithin(this.rootNode, data);
      function addWithin(node, data){
        if(!node){
          return new Node(data);
        }
        if(node.data === data){
          return node;
        }
        if(data < node.data){
          node.left = addWithin(node.left, data);
        }else{
          node.right = addWithin(node.right, data);
        }
        return node;
      }
    }

    has(data) {
      return searchWithin(this.rootNode, data);
      function searchWithin(node, data){
        if(!node){
          return false;
        }
        if(node.data === data){
          return true;
        }
        if(data < node.data){
          return searchWithin(node.left, data);
        }else{
          return searchWithin(node.right, data);
        }
      }
    }

    find(data) {
      return searchWithin(this.rootNode, data);
      function searchWithin(node, data){
        if(!node){
          return null;
        }
        if(node.data === data){
          return node;
        }
        if(data < node.data){
          return searchWithin(node.left, data);
        }else{
          return searchWithin(node.right, data);
        }
      }
    }

    remove(data) {
      this.rootNode = removeWithin(this.rootNode, data);
      function removeWithin(node, data){
        if(!node){
          return null;
        }
        if (data < node.data){
          node.left = removeWithin(node.left, data);
          return node;
        } else if(node.data < data){
          node.right = removeWithin(node.right, data);
          return node;
        } else {
          if(!node.left && !node.right){
            return null;
          }
          if(!node.left){
            node = node.right;
            return node;
          }
          if(!node.right){
            node = node.left;
            return node;
          }

          let minFromRight = node.right;
          while (minFromRight.left){
            minFromRight = minFromRight.left;
          }
          node.data = minFromRight.data;

          node.right = removeWithin(node.right, minFromRight.data);

          return node;
        }
      }
    }

    min() {
      return searchMin(this.rootNode);
      function searchMin(node){
        return node.left ? searchMin(node.left) : node.data;
      }
    }

    max() {
      return searchMax(this.rootNode);
      function searchMax(node){
        return node.right ? searchMax(node.right) : node.data;
      }
    }
  }

  module.exports = {
    BinarySearchTree
  };