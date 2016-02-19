function titleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){ // replace every word with function
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); // return first letter uppercase and return the remaining part of the word 
    });                                                                   // starting from index 1 in lowercase.
}

titleCase("I'm a little tea pot"); // I'm A Little Tea Pot

// no regex

function titleCase(str) {
 str = str.split("").toLowerCase();
  for (var i = 0; i < str.length; i++){
    str[i] = str[i].substring[0].replace(str[i].charAt(0),     str[i].charAt(0).toUpperCase());
  }
  return str.join(" ");
}

titleCase("I'm a little tea pot");