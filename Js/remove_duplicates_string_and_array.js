var uniqueInOrder = function(iterable){
    if (iterable.constructor === Array){
    iterable.forEach(function(x) { this.add(x); });
    }
    else {
    var uniqueList = iterable.split('').filter(function(item,i,allItems){
    return i == allItems.indexOf(item);
    }).join(',');
    return uniqueList;
    }
}