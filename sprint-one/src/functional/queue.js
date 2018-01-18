var Queue = function() {
  var someInstance = {};
var firstNum = 1
var lastNum = 1


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[firstNum] = value;
    firstNum++;
  };

  someInstance.dequeue = function() {
    var stored = storage[lastNum]
    delete storage[lastNum];
    lastNum++
    return stored;
  };

  someInstance.size = function(){
  if(firstNum - lastNum > 0){
  return firstNum - lastNum;
}else {
  return 0;
}
  };

  return someInstance;
};
