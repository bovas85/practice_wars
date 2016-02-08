function twoDecimalPlaces(n) {
  return Math.round(n * 100) / 100
}

// or

function twoDecimalPlaces(n) {
  return parseFloat(n.toFixed(2));
}

twoDecimalPlaces(4.659725356); //, 4.66

twoDecimalPlaces(2.675); //, 2.68