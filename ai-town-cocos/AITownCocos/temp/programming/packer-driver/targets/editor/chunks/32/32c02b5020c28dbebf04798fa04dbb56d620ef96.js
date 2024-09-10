System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseSlice;

  /**
   * Gets all but the first element of `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.tail([1, 2, 3]);
   * // => [2, 3]
   */
  function tail(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseSlice(array, 1, length) : [];
  }

  return {
    setters: [function (_unresolved_) {
      baseSlice = _unresolved_.default;
    }],
    execute: function () {
      _export("default", tail);
    }
  };
});
//# sourceMappingURL=32c02b5020c28dbebf04798fa04dbb56d620ef96.js.map