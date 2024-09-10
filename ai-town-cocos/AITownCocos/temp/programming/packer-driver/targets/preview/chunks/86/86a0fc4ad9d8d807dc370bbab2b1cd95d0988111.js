System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createMathOperation, divide;
  return {
    setters: [function (_unresolved_) {
      createMathOperation = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Divide two numbers.
       *
       * @static
       * @memberOf _
       * @since 4.7.0
       * @category Math
       * @param {number} dividend The first number in a division.
       * @param {number} divisor The second number in a division.
       * @returns {number} Returns the quotient.
       * @example
       *
       * _.divide(6, 4);
       * // => 1.5
       */
      divide = createMathOperation(function (dividend, divisor) {
        return dividend / divisor;
      }, 1);

      _export("default", divide);
    }
  };
});
//# sourceMappingURL=86a0fc4ad9d8d807dc370bbab2b1cd95d0988111.js.map