System.register([], function (_export, _context) {
  "use strict";

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", arrayFilter);
    }
  };
});
//# sourceMappingURL=db281c6ed979a0a2e39d104fc2df470d8f9cb210.js.map