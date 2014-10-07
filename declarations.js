// ----------------------------------------------------------------
// Function Declarations and Expressions
// ----------------------------------------------------------------

f(); // f is available before the function declaration

function f() {
  console.log("function f, at your service");
}

// uncomment the next line to see an error
// g();

// the interpreter doesn't know about g until the next statement runs
var g = function () {
  console.log("function g, at your service");
};

var h2 = function h() {
  console.log(h, "at your service");
}

// uncomment the following line to see that the interpreter loses
// the name "h" after the function expression is evaluated
// h();

h2(); // but wait, h is still understood inside the function
