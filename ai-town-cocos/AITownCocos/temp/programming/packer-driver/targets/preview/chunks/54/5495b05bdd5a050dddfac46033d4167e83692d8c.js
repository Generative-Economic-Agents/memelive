System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var eq;

  /**
   * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseSortedUniq(array, iteratee) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;

      if (!index || !eq(computed, seen)) {
        var seen = computed;
        result[resIndex++] = value === 0 ? 0 : value;
      }
    }

    return result;
  }

  return {
    setters: [function (_unresolved_) {
      eq = _unresolved_.default;
    }],
    execute: function () {
      _export("default", baseSortedUniq);
    }
  };
});
//# sourceMappingURL=5495b05bdd5a050dddfac46033d4167e83692d8c.js.map