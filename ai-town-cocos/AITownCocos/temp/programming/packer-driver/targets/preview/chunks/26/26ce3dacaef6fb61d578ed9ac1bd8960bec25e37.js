System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseSlice;

  /**
   * Gets all but the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.initial([1, 2, 3]);
   * // => [1, 2]
   */
  function initial(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseSlice(array, 0, -1) : [];
  }

  return {
    setters: [function (_unresolved_) {
      baseSlice = _unresolved_.default;
    }],
    execute: function () {
      _export("default", initial);
    }
  };
});
//# sourceMappingURL=26ce3dacaef6fb61d578ed9ac1bd8960bec25e37.js.map