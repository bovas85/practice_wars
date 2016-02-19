function mutation(arr) {
  var target = arr[0].toLowerCase();
  var test = arr[1].toLowerCase();
  for (i=0; i<test.length ; i++){
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);

/*
 First we make the two strings in the array lowercase. test will hold what we are looking for in target.
 Then we loop through our test characters and if any of them is not found we return false.

 If they are all found, the loop will finish without returning anything and we get to return true.
*/