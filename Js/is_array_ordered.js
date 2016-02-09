function inAscOrder(arr) {
 for(var i = 1; i <= arr.length-1; i++) {
   if(arr[i] < arr[i-1]) return false;
 }
 return true;
}

inAscOrder([1,3,2,5,6]);