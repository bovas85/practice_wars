/*

function foo() {}
foo.toString = function() {
  return 'blablabla';
};

Write a function _originalToString which takes a function as the argument, and returns a string which is as same as the argument's original toString's.

Note: You should not change the argument.

For example, the following statement returns function foo() {} instead of blablabla:

_originalToString(foo); // function foo() {}

testcases:

function foo() {}
var original = foo.toString();
foo.toString = function() {
  return 'blablabla';
};

Test.assertEquals(_originalToString(foo), original);

*/


var _originalToString = function(func) {
  // we have to use object's to string method
  // because if we call toString like this:
  // func.prototype.toString()
  // then the prototype object is used as the this context
  // which results in the string [object Object]
  // which is different from the original toString method of a function
  return Object.toString.apply(func);
};