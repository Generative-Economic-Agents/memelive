System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createFlow, flowRight;
  return {
    setters: [function (_unresolved_) {
      createFlow = _unresolved_.default;
    }],
    execute: function () {
      /**
       * This method is like `_.flow` except that it creates a function that
       * invokes the given functions from right to left.
       *
       * @static
       * @since 3.0.0
       * @memberOf _
       * @category Util
       * @param {...(Function|Function[])} [funcs] The functions to invoke.
       * @returns {Function} Returns the new composite function.
       * @see _.flow
       * @example
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * var addSquare = _.flowRight([square, _.add]);
       * addSquare(1, 2);
       * // => 9
       */
      flowRight = createFlow(true);

      _export("default", flowRight);
    }
  };
});
//# sourceMappingURL=bd95c127a7a97b4bd89eaaa6eda89097b1957359.js.map