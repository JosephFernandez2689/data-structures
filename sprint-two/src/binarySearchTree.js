var makeBinarySearchTree = function(value){
  var searchTree = Object.create(searchTreeMethods);
  searchTree.value = value;
  searchTree.left = null;
  searchTree.right = null;
  return searchTree;
};

var searchTreeMethods = {
  insert: function(v, currentNode){

    currentNode = currentNode || this;

    if ( v === currentNode.value ){
      return;
    }
    else if ( v < currentNode.value &&  v !== currentNode.value ){

      if ( currentNode.left ){
        currentNode.insert(v, currentNode.left);
      } else {
        currentNode.left = makeBinarySearchTree(v);
      }
    }
    else {
      if ( currentNode.right ){
        currentNode.insert(v, currentNode.right);
      } else {
        currentNode.right = makeBinarySearchTree(v);
      }
    }
  },
  contains: function(v, currentNode){
    currentNode = currentNode || this;

    if ( v > currentNode.value && currentNode.right) {
      return currentNode.contains(v, currentNode.right);
    } else if ( v < currentNode.value && currentNode.left) {
      return currentNode.contains(v, currentNode.left);
    } else if ( currentNode.value === v ) {
      return true;
    } else {
      return false;
    }
  },
  depthFirstLog: function(callback, currentNode){
    currentNode = currentNode || this;

    callback(currentNode.value);

    if ( currentNode.left ){
      currentNode.depthFirstLog( callback, currentNode.left );
    }
    if ( currentNode.right ){
      currentNode.depthFirstLog( callback, currentNode.right );
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
