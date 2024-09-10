System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var arraySampleSize, baseSampleSize, isArray, isIterateeCall, toInteger;

  /**
   * Gets `n` random elements at unique keys from `collection` up to the
   * size of `collection`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to sample.
   * @param {number} [n=1] The number of elements to sample.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the random elements.
   * @example
   *
   * _.sampleSize([1, 2, 3], 2);
   * // => [3, 1]
   *
   * _.sampleSize([1, 2, 3], 4);
   * // => [2, 3, 1]
   */
  function sampleSize(collection, n, guard) {
    if (guard ? isIterateeCall(collection, n, guard) : n === undefined) {
      n = 1;
    } else {
      n = toInteger(n);
    }

    var func = isArray(collection) ? arraySampleSize : baseSampleSize;
    return func(collection, n);
  }

  return {
    setters: [function (_unresolved_) {
      arraySampleSize = _unresolved_.default;
    }, function (_unresolved_2) {
      baseSampleSize = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArray = _unresolved_3.default;
    }, function (_unresolved_4) {
      isIterateeCall = _unresolved_4.default;
    }, function (_unresolved_5) {
      toInteger = _unresolved_5.default;
    }],
    execute: function () {
      _export("default", sampleSize);
    }
  };
});
//# sourceMappingURL=d26df7ee1036a689295f532d02e5eacad825e6ff.js.map