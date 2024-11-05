/**
 * Write a function `createHelloWorld`. It should return a new function that always returns "Hello World".
 * @return {Function}
 */
var createHelloWorld = function() {
  return function(...args) {
      args = "Hello World";
      return args;
  }
};

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/
