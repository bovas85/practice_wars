function pipeFix(numbers){
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i+1]-1 && i < numbers.length-1 ) {
      numbers.splice(i+1,0,numbers[i]+1);
    }  
  }
  return numbers;
}
pipeFix([1,2,3,5,6,8,9])