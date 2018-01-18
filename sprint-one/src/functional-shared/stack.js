var Stack = function() {
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var instance = {
  number: 0,
 storage: {}
};

_.extend(instance,stackMethods);

return instance;
};

var stackMethods = {
 push: function(value){
   this.storage[this.number] = value;
   this.number++;
 },
 pop: function(){
   if(this.number){
     this.number--;
   };
    var erased = this.storage[this.number];
    delete this.storage[this.number];
      return erased;
   },
 size: function(){
   return this.number;
 }

};
