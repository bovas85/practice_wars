function getCount(words) {
     var vowels = /[aeiou]/gi;
     var cons = /[bcdfghjklmnpqrstwxyz]/gi;
     if (typeof(words) === 'object' || typeof(words) === 'undefined' || 
         typeof(words) === 'number' || typeof(words) === 'boolean'){
       var result = {vowels: 0, consonants: 0};
       return result;
       }
     else {
     x = words.match(vowels);
     y = words.match(cons);
     if (x === null && y == null) {
       var result = {vowels: 0, consonants: 0};
       return result;
     }
     if (x === null) {
       x = 0;
       y = y.length;
       var result = {vowels: x, consonants: y};
       return result;
     }  
     if (y === null) {
       y = 0;
       x = x.length;
       var result = {vowels: x, consonants: y};
       return result;
     }
     else {
       x = x.length;
       y = y.length;
       if (x === null || y === null) return 0;
       var result = {vowels: x, consonants: y};
       return result;
     }
     }
}

// or 


function getCount(words) { 
  var vowels = 0
  var consonants = 0
  
  if (typeof words == "string") {
    for (var c of words.toLowerCase().trim()) {
      if ("aeiou".indexOf(c) >= 0) vowels++
      else if ("bcdfghjklmnpqrstvwxyz".indexOf(c) >= 0) consonants++
    }
  }
  
  return { vowels, consonants }
}

// or 

function getCount(words) {
  var vovels = typeof words === 'string' && words.match(/[aeiou]/gi) ? words.match(/[aeiou]/gi).length : 0;
  var consonants = typeof words === 'string' ? words.replace(/[^a-z]/gi, '').length - vovels : 0;
  return {vowels: vovels , consonants: consonants} 
}