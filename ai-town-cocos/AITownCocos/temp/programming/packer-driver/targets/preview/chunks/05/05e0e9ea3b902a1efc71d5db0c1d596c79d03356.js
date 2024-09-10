System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createMathOperation, add;
  return {
    setters: [function (_unresolved_) {
      createMathOperation = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Adds two numbers.
       *
       * @static
       * @memberOf _
       * @since 3.4.0
       * @category Math
       * @param {number} augend The first number in an addition.
       * @param {number} addend The second number in an addition.
       * @returns {number} Returns the total.
       * @example
       *
       * _.add(6, 4);
       * // => 10
       */
      add = createMathOperation(function (augend, addend) {
        return augend + addend;
      }, 0);

      _export("default", add);
    }
  };
});
//# sourceMappingURL=05e0e9ea3b902a1efc71d5db0c1d596c79d03356.js.map