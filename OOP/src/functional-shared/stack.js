var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
};

var makeStack = function() {
  var obj = {
    storage : {},
    count : 0
  };
  extend(obj, stackMethods);
  return obj
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  
  pop: function(){
    if(this.count > 0){
      delete this.storage[this.count.length -1];
      this.count--;
      return this.storage[this.count];
    }
  },
  
  size: function(){
    return this.count;
  }
};



