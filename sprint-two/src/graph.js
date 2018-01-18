

// Instantiate a new graph
var Graph = function(){
this.edge = [];
this.nodes = [];
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edge[node] =[];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);
  this.nodes.splice(index, 1);
  this.edge.splice(index, 1)
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
return this.edge[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
 this.edge[fromNode].push(toNode);
 this.edge[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
var index = this.edge[fromNode].indexOf(toNode)
  this.edge[fromNode].splice(index, 1);
  this.edge[toNode].splice(index, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(node => cb(node));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
