System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseSum, identity;

  /**
   * Computes the sum of the values in `array`.
   *
   * @static
   * @memberOf _
   * @since 3.4.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the sum.
   * @example
   *
   * _.sum([4, 2, 8, 6]);
   * // => 20
   */
  function sum(array) {
    return array && array.length ? baseSum(array, identity) : 0;
  }

  return {
    setters: [function (_unresolved_) {
      baseSum = _unresolved_.default;
    }, function (_unresolved_2) {
      identity = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", sum);
    }
  };
});
//# sourceMappingURL=85110d954312e2a02940f7c32bb26c6a5186fd81.js.map