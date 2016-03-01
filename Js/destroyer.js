function destroyer(arr) {
  var l = arguments.length;
  var myArr = arguments[0];
  for( var i = 0; i < myArr.length; i++ ){
    for( var j = 1; j < arguments.length; j++ ){
      if( myArr[i] === arguments[j] ){
        myArr.splice( i, 1 );
        i -= 1;
        break;
      }
    }
  }
  return myArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
