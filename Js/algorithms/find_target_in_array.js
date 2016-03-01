/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function (array, targetValue){
    var min = 0;
    var max = array.length - 1;
    var guess;
    var total = 0;
    while (max >= min) {
        total ++;
        guess = Math.floor((min + max) / 2); // first is 11
        println(guess);
        if (array[guess] === targetValue) {
          println(total);
          return guess;
        }
        if (array[guess] < targetValue) { min = guess + 1; }      // if 11 is < 20 (target Index) add guess 11 + 1 to minimum  so min is now 12 (range 12 to 24) 
        else if (array[guess] > targetValue) { max = guess - 1; }
    }
    return -1; // if max < min return -1 as it's outside the true statement of the loop. This only returns if the loop is false.
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 22), -1);
Program.assertEqual(doSearch(primes, 23), 8);