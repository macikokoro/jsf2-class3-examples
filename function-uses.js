// ---------------------------------------------------------------------- 
// Clarity
// ---------------------------------------------------------------------- 
var primes = [];
var product = 1000;
var divisor = 2;
while(product > 1 && divisor <= product) {
  if((product % divisor) > 0) {
    divisor++;
    continue;
  }
  primes.push(divisor)
  product = product / divisor;
}
console.log(primes);

//TODO: turn me into a named function

// ---------------------------------------------------------------------- 
// Reuse
// ---------------------------------------------------------------------- 

// TODO: print out the primes of 5001
// TODO: print out the primes of 50001
// TODO: print out the primes of 658

// ---------------------------------------------------------------------- 
// Callback
// ---------------------------------------------------------------------- 
var count = 0;
var catCounter = function (maxCats) {
  // TODO: print out "mel has x cats" every two seconds
  // until she has maxCats
}
catCounter(5);

// ---------------------------------------------------------------------- 
// Scope
// ---------------------------------------------------------------------- 

// forgetting the var
var pastTime="pontification";

function stop(activity) {
  result = "hammer time"; // TODO: add a var to see an error later
  return result;
}

console.log(stop(pastTime));
console.log(result); // the error will occur here

// ---------------------------------------------------------------------- 
// avoiding collisions
console.log(Math.PI);
(function () {
  var Math = {};
  console.log(Math.PI);
})(); // TODO: take out the parenthesis surround the function definition
console.log(Math.PI);

// ---------------------------------------------------------------------- 
// using a function to create a new scope

// TODO: add a function definition to accomplish the goals below
var user = "mel";
var tonight = "adopting a chubby guinea pig";

var user = "bob";
var tonight = "watching the puppy bowl";

console.log(user, "is", tonight); // TODO: print bob's info here

console.log(user, "is", tonight); // TODO: print mel's info here


// ---------------------------------------------------------------------- 
// hiding a variable

var countHidden = 0;
var catCounterHidden = function () {
  // TODO: define me so that i act just like catCounter
  // but no one else can see my count.
};
catCounterHidden();
console.log(count); // TODO: make this an error
