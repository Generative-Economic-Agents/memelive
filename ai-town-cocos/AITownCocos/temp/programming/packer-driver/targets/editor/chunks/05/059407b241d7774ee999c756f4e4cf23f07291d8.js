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
//# sourceMappingURL=059407b241d7774ee999c756f4e4cf23f07291d8.js.map