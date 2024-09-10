System.register([], function (_export, _context) {
  "use strict";

  /**
   * Gets the first element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias first
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the first element of `array`.
   * @example
   *
   * _.head([1, 2, 3]);
   * // => 1
   *
   * _.head([]);
   * // => undefined
   */
  function head(array) {
    return array && array.length ? array[0] : undefined;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", head);
    }
  };
});
//# sourceMappingURL=9cfbeef998e6eff9519ffa4856cf0d7a43426d41.js.map