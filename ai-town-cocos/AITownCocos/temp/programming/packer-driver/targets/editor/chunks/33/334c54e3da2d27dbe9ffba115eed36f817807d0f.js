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
//# sourceMappingURL=334c54e3da2d27dbe9ffba115eed36f817807d0f.js.map