function findNextSquare(sq) {
  console.log(sq);
  var sqr = Math.sqrt(sq);
  console.log(sqr);
  var next = (sqr + 1) * (sqr + 1);
  console.log(next);
  if (sqr % 1 !== 0) return -1;
  if (next != sqr + 1) return next;
  else return -1;
}
findNextSquare(121);
findNextSquare(151);

// better 

function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

// if sq % 1 return -1 
// else return exponential (Math.sqrt(sq) +1 --> so 12 for example using 121, to the power of 2)  --> so 144