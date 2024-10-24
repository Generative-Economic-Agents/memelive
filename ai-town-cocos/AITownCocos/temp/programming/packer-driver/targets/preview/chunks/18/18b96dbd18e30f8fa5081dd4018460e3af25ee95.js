System.register([], function (_export, _context) {
  "use strict";

  /**
   * Creates an array with all falsey values removed. The values `false`, `null`,
   * `0`, `""`, `undefined`, and `NaN` are falsey.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to compact.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.compact([0, 1, false, 2, '', 3]);
   * // => [1, 2, 3]
   */
  function compact(array) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (value) {
        result[resIndex++] = value;
      }
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", compact);
    }
  };
});
//# sourceMappingURL=18b96dbd18e30f8fa5081dd4018460e3af25ee95.js.map