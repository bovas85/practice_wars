function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

// more checks 

function isOdd(n) {
  if (n % 2 === 0) return false;
  else {
    console.log("number is ", n);
    if (n < 0) {
      if (Math.abs(n) % 1 === 0) { // check if absolute is odd
      console.log("first check");
      return true;
      }
      else return false;
    }
    if (Number(n) === n && n % 1 !== 0) { // check if decimal 
      if (n === parseInt(n)) { // is number == to it's integer?
      console.log(parseInt(n));
      console.log("2nd check");
      return true;
      }
      else return false;
      }
    else return true;
    if (n % 1 !== 0) {
    console.log("third check");
    return false;
    }
    else return true;
  }
}