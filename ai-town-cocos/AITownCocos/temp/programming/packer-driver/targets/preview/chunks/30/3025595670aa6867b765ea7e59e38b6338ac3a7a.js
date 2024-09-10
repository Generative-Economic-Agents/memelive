System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createMathOperation, multiply;
  return {
    setters: [function (_unresolved_) {
      createMathOperation = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Multiply two numbers.
       *
       * @static
       * @memberOf _
       * @since 4.7.0
       * @category Math
       * @param {number} multiplier The first number in a multiplication.
       * @param {number} multiplicand The second number in a multiplication.
       * @returns {number} Returns the product.
       * @example
       *
       * _.multiply(6, 4);
       * // => 24
       */
      multiply = createMathOperation(function (multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);

      _export("default", multiply);
    }
  };
});
//# sourceMappingURL=3025595670aa6867b765ea7e59e38b6338ac3a7a.js.map