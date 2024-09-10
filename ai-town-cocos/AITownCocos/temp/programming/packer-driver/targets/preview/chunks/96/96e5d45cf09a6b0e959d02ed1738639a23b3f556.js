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
//# sourceMappingURL=96e5d45cf09a6b0e959d02ed1738639a23b3f556.js.map