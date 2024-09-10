System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var baseFlatten;

  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }

  return {
    setters: [function (_unresolved_) {
      baseFlatten = _unresolved_.default;
    }],
    execute: function () {
      _export("default", flatten);
    }
  };
});
//# sourceMappingURL=646891b967c4678c8a44060d0654b4e0a804f6e0.js.map