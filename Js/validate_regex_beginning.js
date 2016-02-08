function validateCode(code){
    return /^1|^2|^3/g.test(code);
}

// or

function validateCode(code){
    return /^[123]/.test(code);
}


validateCode(123); // true
validateCode(321); // true
validateCode(421); // false