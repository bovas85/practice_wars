function lowercaseCount(str){
    var count = str.match(/[a-z]/g);
    if (count === null || count == 0) return 0;
    else return count.length;
}

//better:

function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");