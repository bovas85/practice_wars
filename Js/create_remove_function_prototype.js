Array.prototype.remove = function(val) {
  if(isNaN(val) || val < 0 || val > this.length) { return false; }
  return this.splice(val, 1);
}
var someArray = [1, 2, 3];
  
someArray.remove(1);