function toDense(sparse){
    for (i=0; i<=sparse.length-1; i++) {
            if (sparse[i] === null) {
                sparse.splice(sparse[i], 1);
            }
    }
    console.log(sparse);
    return sparse;
}
//90% working OR 


var sparse = [undefined, 2, null, , , 4, 6, null];
var newArray = [];
function toDense(sparse) { 
   for (var i = 0; i < sparse.length; i++) {
  if (sparse[i] === 0) {
    newArray.push(sparse[i]);
    }
  if (sparse[i]) {
    newArray.push(sparse[i]);
  }
}
console.log(newArray);
return newArray;
}
toDense(sparse);
	
	// better below
	
function toDense(sparse){
  return sparse.filter(function(e){
  return e !== null && e !== undefined;
  });
}