System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createFlow, flow;
  return {
    setters: [function (_unresolved_) {
      createFlow = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Creates a function that returns the result of invoking the given functions
       * with the `this` binding of the created function, where each successive
       * invocation is supplied the return value of the previous.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Util
       * @param {...(Function|Function[])} [funcs] The functions to invoke.
       * @returns {Function} Returns the new composite function.
       * @see _.flowRight
       * @example
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * var addSquare = _.flow([_.add, square]);
       * addSquare(1, 2);
       * // => 9
       */
      flow = createFlow();

      _export("default", flow);
    }
  };
});
//# sourceMappingURL=bd7a931da5a5611aac2d35ebc583da9728cda1d2.js.map