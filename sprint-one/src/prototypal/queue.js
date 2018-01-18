var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var instance = Object.create(queueMethods);
instance.storage ={};
instance.firstNum = 1;
instance.lastNum = 1;
 return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.firstNum] = value;
    this.firstNum++;
  },
  dequeue: function(){
    var erased = this.storage[this.lastNum];
    delete this.storage[this.lastNum];
    this.lastNum++;
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
