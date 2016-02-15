function toCamelCase(str){
  return str.replace(/(_|-)([a-z])/gi, toUpperCase );
  
}
function toUpperCase(str){
  console.log(str[1]);
  return str[1].toUpperCase();
}

// or 

function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

// or 

function toCamelCase(str) {
  return str.replace(/[_-][A-Za-z]/g, function(match) {return match[1].toUpperCase();});
}

// complex 

function toCamelCase(str){
  var demarcs ='-_';
  return str.split('').map(function(value,index,array){
    if(demarcs.indexOf(value) > -1){
      return '';
    } else if (demarcs.indexOf(array[index - 1]) > -1){
      return value.toUpperCase();
    } else {
      return value;
    }
  }).join('');
}

// or 

unction toCamelCase(str){
  var strArray;
  if (str.indexOf('-') !== -1){ //if delineated by -
    strArray = str.split('-');
  } else {
    strArray = str.split('_');  //if delineated by _
  }
  var camelCase = strArray[0]; //keeps first word value as is
  for (var i=1, len=strArray.length; i < len; i++){
    var capitalized = strArray[i].substr(0, 1).toUpperCase() + strArray[i].slice(1);
    camelCase += capitalized;
  }
  return camelCase;
}