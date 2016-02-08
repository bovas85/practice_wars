function Calculator(vat){ 
  this.getNet = function(grossPrice){
    grossPrice = (grossPrice / (vat / 100 + 1)).toFixed(2);
    console.log(grossPrice);
    return parseFloat(grossPrice);
    
  };
  this.getVat = function(grossPrice){
    grossPrice = (grossPrice - this.getNet(grossPrice)).toFixed(2);
    return parseFloat(grossPrice);
  };
}

var calc = new Calculator(20);
calc.getNet(100);
