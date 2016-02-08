function car(p,n){
console.log(p, n);
  if ( n == 1 ){
      n = 80 / 100;
      return (p * n).toFixed(2);
  }
  if ( n == 2 ){
      n = 80 / 100;
      var first = (p * n).toFixed(2);
      console.log(first);
      var second = (first * n).toFixed(2)
      console.log(second);
      return second;
  }
  if ( n == 3 ) {
      n = 80 / 100;
      var first = (p * n).toFixed(2);
      var second = (first * n).toFixed(2);
      var third = (second * 0.9).toFixed(2);
      return third;
  }
  if ( n == 4) {
      n = 80 / 100;
      var first = (p * n).toFixed(2);
      var second = (first * n).toFixed(2);
      var third = (second * 0.9).toFixed(2);
      var fourth = (third * 0.9).toFixed(2);
      return fourth;
   }
   if ( n == 5) {
      n = 80 / 100;
      var first = (p * n).toFixed(2);
      var second = (first * n).toFixed(2);
      var third = (second * 0.9).toFixed(2);
      var fourth = (third * 0.9).toFixed(2);
      var fifth = (fourth * 0.9).toFixed(2);
      return fifth;
   }
}


// better 

function car(p,n){
   for( i=0;i<n;i++ ){
    if( i<2 ) p = p*0.8;
    else p = p*0.9;
   }
   return p.toFixed(2);
}

// or

function car(p ,n){
  var i = 0;
  while (i++ < n) p *= (i < 3 ? .8 : .9);
  return p.toFixed(2);
}