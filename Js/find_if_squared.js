var isSquare = function(arr){
  if(arr.length == 0)
    return undefined; 
    
  var allSquares = true;
  for(var i = 0; i < arr.length; i++)
    if(Math.sqrt(arr[i]) % 1 != 0)
      allSquares = false;
  return allSquares;
}

var count = 0;
var isSquare = function(arr){
  for (i=0; i<arr.length; i++) {
     if (Math.sqrt(arr[i]) % 1 === 0 ) { 
         count = count + 1;
         console.log(count);
     }
  }
  if(count < arr.length || count > arr.length) {
  count = 0;
  return false;
  }
  else if(count === 0) {
  count = 0;
  return undefined;  
  }
  else if(count == arr.length) {
  return true;
  }
};
isSquare([1, 4, 9, 16, 25, 36]);