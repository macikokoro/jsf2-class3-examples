a(); // a is available at the beginning of the global scope
function a() { console.log("a"); }

(function() {
  b(); // b is available at the beginning of this scope
  function b() { console.log("b"); }
})();

//b(); //uncomment me to show how b is out of scope here
