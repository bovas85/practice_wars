function dadFilter(str){
    return str.replace(/^[, ]+|[, ]+$/g, "").replace(/,+/g, ",");
}


// or 

function dadFilter(str){
  return str.replace(/,{2,}/g,",").replace(/,+( +)?$/,"");
}

function dadFilter(str) {
  return str.replace(/,,+/g, ",").replace(/,\s*$/, "")
}

function dadFilter(str){
  return str.replace(/,+/g, ",").replace(/(,|\s)+$/, "");
}

function dadFilter(str){
  str = str.replace(/,+/g, ",")
           .trim()
           .replace(/,$/, "");
  
  return str;
}