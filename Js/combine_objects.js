function combine(){
 var final = {}; 
 for(var _arg in arguments){ 
   for(var _property in arguments[_arg]){
     final[_property]===undefined?
       final[_property]=arguments[_arg][_property]:
       final[_property]+=arguments[_arg][_property];
   }
  }
  return final;
}

// 

function combine() {
  var result = Object.assign({}, arguments[0]);
  var a = arguments;

  for (var i = 1; i < a.length; i++) {
    for (var key in a[i]) {
      if (a[i].hasOwnProperty(key)) {
      if (result[key]) {
          result[key] += a[i][key];
      } else {
        result[key] = a[i][key];
      }        
      }
    }
  }
  return result;
}

//

const combine = (...params) => params.reduce((a, b) => {
  for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
  return a;
 }, {});