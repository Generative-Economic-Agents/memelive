System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseFindIndex, baseIsNaN, strictIndexOf;

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  return {
    setters: [function (_unresolved_) {
      baseFindIndex = _unresolved_.default;
    }, function (_unresolved_2) {
      baseIsNaN = _unresolved_2.default;
    }, function (_unresolved_3) {
      strictIndexOf = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", baseIndexOf);
    }
  };
});
//# sourceMappingURL=0aeca5b135b8b83c69fd614da8e9af92d40094ea.js.map