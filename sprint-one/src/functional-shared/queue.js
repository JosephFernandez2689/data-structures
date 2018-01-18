var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstance = {};
someInstance.storage = {};
someInstance.firstNum = 1;
someInstance.lastNum = 1;

someInstance.enqueue = queueMethods.enqueue;
someInstance.dequeue = queueMethods.dequeue;
someInstance.size = queueMethods.size;
return someInstance;
};

var queueMethods = {

enqueue: function(value){
  this.storage[this.firstNum] = value;
  this.firstNum++;
},
dequeue : function(){
  var erased = this.storage[this.lastNum];
  delete this.storage[this.lastNum];
  this.lastNum ++;
  return erased;
},

size: function(){
  if(this.firstNum - this.lastNum > 0){
    return this.firstNum - this.lastNum;

  }else{
    return 0;
   }
  }
};
