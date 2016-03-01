var swap = function(array, firstIndex, secondIndex) {
	var temp = array[secondIndex]; // 9
	array[secondIndex] = array[firstIndex]; // 7
	array[firstIndex] = temp;
};

var testArray = [7, 9, 4];

swap(testArray, 0, 1);
println(testArray);
Program.assertEqual(testArray, [9, 7, 4]);
swap(testArray, 1, 2);
println(testArray);
Program.assertEqual(testArray, [9, 4, 7]);
swap(testArray, 0, 2);
println(testArray);
Program.assertEqual(testArray, [7, 4, 9]);