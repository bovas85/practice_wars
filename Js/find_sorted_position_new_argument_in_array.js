function where(arr, num) {
  arr = arr.sort(function(a,b){
    return (a - b);
  });
  if (arr.indexOf(num) === -1 && num > arr[arr.length - 1]) {
      console.log("first check");
      return arr.length;
    }
  if (arr.indexOf(num) >= 0) {
      console.log("second check");
      return arr.indexOf(num);
    }
  else {
    for (i=0; i<arr.length; i++){
      if (arr[i] > num) {
        console.log("third check");
        return arr.indexOf(arr[i]);
      }
    }
  }
}
where([10, 20, 30, 40, 50], 35);