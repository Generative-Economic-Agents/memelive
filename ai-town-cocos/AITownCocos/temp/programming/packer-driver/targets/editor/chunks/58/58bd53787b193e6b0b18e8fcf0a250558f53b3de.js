System.register([], function (_export, _context) {
  "use strict";

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  return {
    setters: [],
    execute: function () {
      _export("default", stubArray);
    }
  };
});
//# sourceMappingURL=58bd53787b193e6b0b18e8fcf0a250558f53b3de.js.map