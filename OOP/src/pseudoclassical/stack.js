var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.count = 0;
};

// You'll likely want to store some values on Stack.prototype to complete this.
Stack.prototype.size = function(value){
  return this.count;
}
Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;

}
Stack.prototype.pop = function() {
  if(this.count > 0) {
    delete this.storage[this.count];
    this.count--
    return this.storage[this.count];
  }
}