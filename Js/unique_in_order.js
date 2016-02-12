var uniqueInOrder = function(iterable){
    if (typeof iterable[0] === 'undefined') return [];
    if (iterable.constructor === String){
       var uniqueList = iterable.split('');
       var ret = [uniqueList[0]];
       for (var i = 1; i < uniqueList.length; i++) { // start loop at 1 as element 0 can never be a duplicate
           if (uniqueList[i-1] !== uniqueList[i]) {
               ret.push(uniqueList[i]);
           }
       }
       return ret;
    }
    if (iterable.constructor === Array){
      iterable = iterable.sort(function (a, b) { return a*1 - b*1; });
      var ret = [iterable[0]];
      for (var i = 1; i < iterable.length; i++) { // start loop at 1 as element 0 can never be a duplicate
          if (iterable[i-1] !== iterable[i]) {
              ret.push(iterable[i]);
          }
      }
      return ret;
    }
}

Test.assertSimilar(uniqueInOrder([1,2,2,3,3]), [1,2,3])
Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])

// way smaller :

function uniqueInOrder(it) {
  var result = [];
  var last
  console.log(last); // this is undefined on purpose to check if undefined and return result (empty) if empty array
  for (var i = 0; i < it.length; i++) {
    console.log(it[i]);
    if (it[i] !== last) {
      result.push(last = it[i]);
    }
  }
  return result;
}
uniqueInOrder("AAAABBBCCDAABBB");  // so strings can be counted as arrays no need to split or join 

// another option

var uniqueInOrder = function(iterable){
  var result = [];
  for (var i = 0; i < iterable.length; i++) {
    if (/*this doesn't make sense ->> iterable[i-1] === undefined || */iterable[i-1] !== iterable[i]) {
      result.push(iterable[i]);
    }
  }
  return result; // returns it empty if not true for the if statement
}
uniqueInOrder([1,2,2,3,3]);