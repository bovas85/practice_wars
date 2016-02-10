var dense = [];                    // declaring global variable to be picked up by function below
Array.prototype.isSparse = function() {
  dense = this.filter(function() { // filters the sparse array looking for undefined elements
  return true;                     // to remove and returns the valid elements to the dense array
});
   if (dense.length < this.length) // if it's sparse the dense array will be x = sparse element short 
   return true;                    // [,,,,,,] > [] or [,1,2,3] > [1,2,3]
   else return false;              // if length is same array is not sparse.
};

// shorter

Array.prototype.isSparse = function() {
  return this.length !== Object.keys(this).length; // 
}

// test it below
arr1 = [,,,,,];
arr2 = [1,2,3,,];
arr3 = [1,2,3];
Array.prototype.isSparse = function() {
  console.log(Object.keys(this).length);
  return this.length !== Object.keys(this).length; // 
}
arr1.isSparse(); // returns log 0 and true while arr3 is 3 and false


// another option with more test cases:

/*there is one big problem with your test cases.
Say we have an array as follows :
var arr = [,1,2]
We can use Object.keys to tell if arr is sparse.
Object.keys(arr) // -> 2 != arr.length
We then add a non-numeric property to arr
arr.abc = 55
Object.keys now return a false positive.
Object.keys(arr) // 3 == arr.length
*/

Array.prototype.isSparse = function() {
for(var i = 0; i < this.length; i++){
if(!(i in this))
return true
}
return false
}

/*
for (var keys in this){
       if (Object.keys(this).length === 0) return true;
     }
     
     if (this[i] == undefined ) return false;
     
     
Array.prototype.isSparse = function() {
  for(i = 0; i < this.length; i++){
      if (this[i] == null || this[i] == undefined){
        console.log(this[i] + " is null");
        if (this[i] + this[i+1] == NaN) {
        console.log(this[i] + this[i+1] + " is NaN");
        return true;
        }
        else {
        console.log(this[i] + "is not null");
        return false;
        }
      }
   }
}
*/