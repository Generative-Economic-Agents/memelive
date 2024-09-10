System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createRange, rangeRight;
  return {
    setters: [function (_unresolved_) {
      createRange = _unresolved_.default;
    }],
    execute: function () {
      /**
       * This method is like `_.range` except that it populates values in
       * descending order.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Util
       * @param {number} [start=0] The start of the range.
       * @param {number} end The end of the range.
       * @param {number} [step=1] The value to increment or decrement by.
       * @returns {Array} Returns the range of numbers.
       * @see _.inRange, _.range
       * @example
       *
       * _.rangeRight(4);
       * // => [3, 2, 1, 0]
       *
       * _.rangeRight(-4);
       * // => [-3, -2, -1, 0]
       *
       * _.rangeRight(1, 5);
       * // => [4, 3, 2, 1]
       *
       * _.rangeRight(0, 20, 5);
       * // => [15, 10, 5, 0]
       *
       * _.rangeRight(0, -4, -1);
       * // => [-3, -2, -1, 0]
       *
       * _.rangeRight(1, 4, 0);
       * // => [1, 1, 1]
       *
       * _.rangeRight(0);
       * // => []
       */
      rangeRight = createRange(true);

      _export("default", rangeRight);
    }
  };
});
//# sourceMappingURL=6f600fe9d21c75dd790bb2b3d87a081eaeaf70ae.js.map