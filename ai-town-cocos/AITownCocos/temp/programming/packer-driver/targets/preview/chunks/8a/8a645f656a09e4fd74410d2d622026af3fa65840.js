System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var eq;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;

    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }

    return -1;
  }

  return {
    setters: [function (_unresolved_) {
      eq = _unresolved_.default;
    }],
    execute: function () {
      _export("default", assocIndexOf);
    }
  };
});
//# sourceMappingURL=8a645f656a09e4fd74410d2d622026af3fa65840.js.map