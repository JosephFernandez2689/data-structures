var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
this.storage = {};
this.firstNum = 1;
this.lastNum = 1;

};

Queue.prototype.enqueue = function(value){
  this.storage[this.firstNum] = value;
  this.firstNum++;
};
Queue.prototype.dequeue =function(){
  var erased = this.storage[this.lastNum];
  delete this.storage[this.lastNum];
  this.lastNum++;
  return erased;
};
Queue.prototype.size = function(){
  if(this.firstNum - this.lastNum >0){
    return this.firstNum - this.lastNum;
  }
  else{
    return 0;
  }
};
var instance = new Queue();
