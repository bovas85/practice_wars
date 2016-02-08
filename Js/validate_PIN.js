function validatePIN (pin) {
  if (pin.match(/[^0-9]/g)){
      return false;  
  }
  if (pin.length == 4 || pin.length == 6){
      return true;
  }  
  else {
      return false;
  }
}

//better 

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin) //matches the regEx on the left and returns result
}
validatePIN("a123");