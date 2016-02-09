function doubleCheck(str){
    str = str.toLowerCase();
    var len = str.length;
    for(var i = 1; i < len; i++) {
      if(str[i] === str[i - 1]) return true;
    }
    return false;
}

// so above starts from one and goes up to find if the next is same as previous element 
// or

function doubleCheck(str){
  return /(.)\1/i.test(str);
}

// matches any char except \n 1 more time