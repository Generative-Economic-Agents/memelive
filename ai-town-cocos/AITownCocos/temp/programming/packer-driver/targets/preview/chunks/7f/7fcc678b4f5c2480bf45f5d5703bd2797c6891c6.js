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
//# sourceMappingURL=7fcc678b4f5c2480bf45f5d5703bd2797c6891c6.js.map