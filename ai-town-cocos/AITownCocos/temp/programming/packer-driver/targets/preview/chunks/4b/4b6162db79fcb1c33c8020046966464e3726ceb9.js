System.register([], function (_export, _context) {
  "use strict";

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }

    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", arrayMap);
    }
  };
});
//# sourceMappingURL=4b6162db79fcb1c33c8020046966464e3726ceb9.js.map