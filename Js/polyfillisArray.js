Array.isArray = function(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
};

Array.isArray([1,2,3]); // true
Array.isArray("no array"); // false