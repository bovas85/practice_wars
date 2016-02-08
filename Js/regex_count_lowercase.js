function lowercaseCount(str){
if (str.length === 0 ) { return 0;}
if (str.length === null) { return 0;}
if (str === undefined) { return 0;}
else if (str.match(/[a-z]/g)) {
return str.match(/[a-z]/g).length;
}
else return 0;
}
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");


//better:

function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");