function Calculator(vat){ 
console.log(vat);
  this.getNet = function(grossPrice){
  console.log(grossPrice);
    return (grossPrice / (vat / 100 + 1)).toFixed(2);
  };
  this.getVat = function(grossPrice){
    return (grossPrice - this.getNet(grossPrice)).toFixed(2);
  };
}