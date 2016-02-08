function dice(minimum, maximum){
  console.log(minimum, maximum);
  var operation1 = Math.floor(Math.random() * (maximum - minimum + 1));
  var operation2 = operation1 + minimum;
  console.log(operation1);
  console.log(operation2);
  var result = operation2;
  console.log(result);
  return result;
}

function dice(minimum, maximum){
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
dice(300, 600);