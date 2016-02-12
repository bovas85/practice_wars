var average = function (n) {
  if (typeof n === 'string') {return "Incorrect"}
  var length = n.length;
  return n.reduce(function (a, b) {return a + b;}) / length;
}

// or mine

var average = (n) => {
  if (typeof n === "string") return "Incorrect";
  else {
      var x=0;
      for (i=0;i<n.length;i++) {
          x += n[i];
      }
      return parseFloat(x/n.length);
      }
}