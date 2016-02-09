function generateRange(start, end, step){
  var arr = [];
    for (var i = start; i <= end; i += step) {
      arr.push(i);
    }
  return arr;
}

// shorter 

function generateRange(min, max, step) {
  for (var res = []; min <= max; min += step) res.push(min)
  return res
}

generateRange(2, 10, 2); // [2,4,6,8,10]