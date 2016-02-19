function largestOfFour(arr) {
  var biggest = [];
  for (i in arr) {
    result = arr[i].reduce(function(a, b){
      return a > b ? a : b;
    });
    biggest.push(result);
  }
  return biggest;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //should return [27,5,39,1001]