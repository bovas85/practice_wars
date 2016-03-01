function rot13(str) {
    var newStr="";
    for(var i in str){
        //Checks if character lies between A-Z
        if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91) {
            newStr += String.fromCharCode(str.charCodeAt(i));
            continue;
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        if(str.charCodeAt(i) < 78){
            newStr += String.fromCharCode(str.charCodeAt(i) + 13);
        }
        else{
            //Otherwise shift the character 13 places backward
            newStr += String.fromCharCode(str.charCodeAt(i) - 13);
        }
    }
    return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

// or 

function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 91) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}