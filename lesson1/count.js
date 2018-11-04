module.exports.counter = function(arr){
  return "There are " + arr.length + " elements in this Array";
};

module.exports.adder = function(a,b){
  return `Sum : ${a+b}`;
};

module.exports.pi = 3.14;

/*
Method 2
module.exports.counter = counter;

Method 3
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
*/
