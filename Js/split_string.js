function semicolonSeparationToCommaSeparation(input) {
  input = String(input.split(";"));
  console.log(input);
  for (semicolon in input){
    input = input.replace(";", ",");
  }
  return input;
}

// workaroun above

// below to fix:

function semicolonSeparationToCommaSeparation(input) {
  return input.split(";").join(",");  
}

// fixed below:

function semicolonSeparationToCommaSeparation(input) {
  return input.split(";")._join(',');
}
semicolonSeparationToCommaSeparation("1;2;3");

// lookup on primitive string 