function chunk(arr, size) {
  var newArr = [];
  for (i = 0 ; i < arr.length ; i+=size){
    newArr.push(arr.slice(i, i+(size)));
  }
  //newArr.push(arr.slice(0, size), arr.slice(size, size + size));
  return newArr;
}

chunk([0, 1, 2, 3, 4, 5], 2);
