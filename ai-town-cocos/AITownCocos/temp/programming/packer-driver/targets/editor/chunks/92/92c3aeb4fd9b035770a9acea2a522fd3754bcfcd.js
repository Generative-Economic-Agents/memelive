System.register([], function (_export, _context) {
  "use strict";

  /**
   * Gets the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of `array`.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   */
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", last);
    }
  };
});
//# sourceMappingURL=92c3aeb4fd9b035770a9acea2a522fd3754bcfcd.js.map