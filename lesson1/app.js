//Basics
var time = 0;

var timer = setInterval(function() {
  time += 2;
  console.log(time + " Seconds have passed");
  if(time > 5){
    clearInterval(timer);
  }
}, 2000);


// function expresssion
function callFunction(fun) {
  fun();
}

var sayHi = function () {
  console.log("Hello");
};

callFunction(sayHi);

// Modules and require
var fromCount = require('./count');

console.log(fromCount.counter(["Brajesh","Singh","B.Tech","MNNIT","Allahabad"]));
console.log(fromCount.adder(4,5));
console.log(fromCount.pi);


// EventEmitter Modules
var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person,events.EventEmitter);

var Brajesh = new Person("Brajesh");
var Singh = new Person("Singh");

var people = [Brajesh, Singh];

people.forEach(function(person) {
  person.on('speak',function(message) {
    console.log(person.name + " said: " + message);
  });
});

Brajesh.emit('speak','Hello Brother');
Singh.emit('speak','Hi Dear');


// Reding and Writing files Module fs
var fs = require('fs');

var readme = fs.readFileSync('readme.txt','utf8');
fs.writeFileSync('readme.txt','Additionally added code!');
console.log(readme);
