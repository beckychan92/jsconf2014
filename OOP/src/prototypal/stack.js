var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var stack = Object.create(stackMethods);
  return stack;
  
};

var stackMethods = {
  storage: {},
  count: 0,
  push: function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function(){
    if(this.count > 0){
      delete this.storage[this.count];
      this.count--
      return this.storage[this.count];
    }
  },
  size: function(){
      return this.count;
  }
};

