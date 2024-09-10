System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseFlatten, INFINITY;

  /**
   * Recursively flattens `array`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flattenDeep([1, [2, [3, [4]], 5]]);
   * // => [1, 2, 3, 4, 5]
   */
  function flattenDeep(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, INFINITY) : [];
  }

  return {
    setters: [function (_unresolved_) {
      baseFlatten = _unresolved_.default;
    }],
    execute: function () {
      /** Used as references for various `Number` constants. */
      INFINITY = 1 / 0;

      _export("default", flattenDeep);
    }
  };
});
//# sourceMappingURL=c7efad564b69321f610c53bbff2130e5883ba98f.js.map