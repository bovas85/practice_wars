function count(array){
    var  count = {}; 
    array.forEach(function(i) { count[i] = (count[i]||0)+1;  });
}
count(['a', 'a', 'b', 'b', 'b']);