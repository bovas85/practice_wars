String.prototype.digit = function() {
  return /^\d$/.test(this);
};

// mine is below


String.prototype.digit = function() {
  if (/[a-z\s]/gi.test(this)) return false;
  if (this>9) return false;
  return /[0-9]/g.test(this);
};

''.digit() // , false);
'7'.digit() // , true);
' '.digit() //, false);
'14'.digit() //, false);