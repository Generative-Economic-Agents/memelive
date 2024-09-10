System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createMathOperation, subtract;
  return {
    setters: [function (_unresolved_) {
      createMathOperation = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Subtract two numbers.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Math
       * @param {number} minuend The first number in a subtraction.
       * @param {number} subtrahend The second number in a subtraction.
       * @returns {number} Returns the difference.
       * @example
       *
       * _.subtract(6, 4);
       * // => 2
       */
      subtract = createMathOperation(function (minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);

      _export("default", subtract);
    }
  };
});
//# sourceMappingURL=4754b1e56e199a7e427f8e22a303d648f640f0fe.js.map