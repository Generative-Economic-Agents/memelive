System.register([], function (_export, _context) {
  "use strict";

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }

    return false;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", arraySome);
    }
  };
});
//# sourceMappingURL=7bbd4613c5ee0154cdd04914d5b73c6fbe21ed94.js.map