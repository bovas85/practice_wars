/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.filter()

*/

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*The first line will turn the arguments variable into a full array instead of the limited array it currently is.
Next I remove the first argument since I don't need, since I only want the other arguments passed besides the first which is the array we are going to compare against.
Then use the filter() to filter out the elements that are on the array and keep the ones that are not.
*/