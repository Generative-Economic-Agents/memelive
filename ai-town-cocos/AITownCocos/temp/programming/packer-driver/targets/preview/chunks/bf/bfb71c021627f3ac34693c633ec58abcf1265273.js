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
//# sourceMappingURL=bfb71c021627f3ac34693c633ec58abcf1265273.js.map