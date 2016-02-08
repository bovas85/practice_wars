function primes(start, end){
  var prime = [];
  var isPrime = function(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i === 0) return false;
    }
    return true;
  };
  for(var i = start; i <= end; i++){
    if(isPrime(i)) prime.push(i);
  }
  if(prime.length === 0) prime = null;
  return prime;
}
primes(1, 10);