System.register([], function (_export, _context) {
  "use strict";

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }

    return true;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", arrayEvery);
    }
  };
});
//# sourceMappingURL=b746447ef887787e3863a4f4ace0d512ac6e8e63.js.map