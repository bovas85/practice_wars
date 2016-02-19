function end(str, target) {
  if (target.length == 1) {
    if (str.substr(-1) == target) return true;
    else return false;
  }
  if (target.length == 2){
      if (str.substr(-2, 2) == target) return true;
  }
  if (target.length == 4){
      if (str.substr(-4, 4) == target) return true;
  }
  else return false;
}

end("Bastian", "n");

// regex

function end(str, target) {
  return new RegExp(target + '$').test(str); // tests string for regex /target$/
}

end("Bastian", "on");