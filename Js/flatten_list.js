function flatten(arr) {
  var newArr = [];
  for (i=0; i<arr.length; i++){
    for (j=0; j<arr[i].length; j++){
      newArr.push(arr[i][j]);
    }
  }
  return newArr;
}

function flatten(l){
  return l.reduce(function(a,b){return a.concat(b);}, []);
}