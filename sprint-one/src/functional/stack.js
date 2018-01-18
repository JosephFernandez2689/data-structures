var Stack = function() {
  var someInstance = {};
var number = 0
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[number] = value;
    number++;
  };

  someInstance.pop = function() {
  if(number){
    number--;
  } return storage[number];
 };

  someInstance.size = function() {
    return number;
  };

  return someInstance;
};
