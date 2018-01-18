var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

this.storage = {};
this.number = 0;

};
Stack.prototype.push = function(value){
  this.storage[this.number] = value;
  this.number++;
};
Stack.prototype.pop = function (){
  if(this.number){
    this.number--;
  };
  var erased = this.storage[this.number];
  delete this.storage[this.number];
  return erased;
};
Stack.prototype.size = function(){
  return this.number;
};
