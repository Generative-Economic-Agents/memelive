System.register([], function (_export, _context) {
  "use strict";

  /**
   * The inverse of `_.toPairs`; this method returns an object composed
   * from key-value `pairs`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} pairs The key-value pairs.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.fromPairs([['a', 1], ['b', 2]]);
   * // => { 'a': 1, 'b': 2 }
   */
  function fromPairs(pairs) {
    var index = -1,
        length = pairs == null ? 0 : pairs.length,
        result = {};

    while (++index < length) {
      var pair = pairs[index];
      result[pair[0]] = pair[1];
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", fromPairs);
    }
  };
});
//# sourceMappingURL=db955f9e1259ea6d2c3c301b7bc0efd98d9b84ee.js.map