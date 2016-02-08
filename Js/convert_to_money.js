var numberToMoney = function(n) {
  n = (Math.floor(n * 100) / 100);
  n = String(n);
  n = n.split("");
  if (n.length > 6) {
    n = n.slice(0, 7);
    n.splice(1, 0, ",");
    n = n.join("");
  }
  else {
    n = n.join("");
    n = (Math.floor(n * 100) / 100);
    
  }
  return n;
};
numberToMoney(100.2233567);