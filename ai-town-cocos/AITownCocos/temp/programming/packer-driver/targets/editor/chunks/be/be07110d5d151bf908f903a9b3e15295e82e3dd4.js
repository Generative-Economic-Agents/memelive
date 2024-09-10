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
//# sourceMappingURL=be07110d5d151bf908f903a9b3e15295e82e3dd4.js.map