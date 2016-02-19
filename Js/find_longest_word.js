function findLongestWord(str) {
  str = str.split(" ");
  var longest = str.reduce(function (a, b) { // iterates through array and finds longest with if statement explained below
    console.log(str);
    console.log(a.length + " " + b.length);
    console.log(a.length > b.length);
    return a.length > b.length ? a : b; // first > second? if true first > third ? if false second > third etc... see below
  });
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/*
    ["What", "is", "the", "average", "airspeed", "velocity", "of", "an", "unladen", "swallow"]
    a: What b: is
    4 2
    true
    
    ["What", X, "the", "average", "airspeed", "velocity", "of", "an", "unladen", "swallow"]
    a: What b: the
    4 3
    true
    
    ["What", X, X, "average", "airspeed", "velocity", "of", "an", "unladen", "swallow"]
    a: What b: average
    6 4 7
    false
    
    [X, X, X, "average", "airspeed", "velocity", "of", "an", "unladen", "swallow"]
    a: average b: airspeed
    7 8
    false
    
    [X, X, X, X, "airspeed", "velocity", "of", "an", "unladen", "swallow"]
    a: airspeed b: velocity
    8 8
    false
    
    [X, X, X, X, X, "velocity", "of", "an", "unladen", "swallow"]
    a: velocity b: of
    8 2
    true
    
    [X, X, X, X, X, "velocity", X, "an", "unladen", "swallow"]
    a: velocity b: an
    8 2
    true
    
    [X, X, X, X, X, "velocity", X, X, "unladen", "swallow"]
    a: velocity b: unladen
    8 7
    true
    
    [X, X, X, X, X, "velocity", X, X, X, "swallow"]
    a: velocity b: swallow
    8 7
    true
    
    [X, X, X, X, X, "velocity", X, X, X, X]
    longest = "velocity" = 8 !
*/