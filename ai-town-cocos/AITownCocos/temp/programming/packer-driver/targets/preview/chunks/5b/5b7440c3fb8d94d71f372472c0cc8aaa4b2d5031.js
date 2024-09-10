System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var arrayShuffle, baseShuffle, isArray;

  /**
   * Creates an array of shuffled values, using a version of the
   * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to shuffle.
   * @returns {Array} Returns the new shuffled array.
   * @example
   *
   * _.shuffle([1, 2, 3, 4]);
   * // => [4, 1, 3, 2]
   */
  function shuffle(collection) {
    var func = isArray(collection) ? arrayShuffle : baseShuffle;
    return func(collection);
  }

  return {
    setters: [function (_unresolved_) {
      arrayShuffle = _unresolved_.default;
    }, function (_unresolved_2) {
      baseShuffle = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArray = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", shuffle);
    }
  };
});
//# sourceMappingURL=5b7440c3fb8d94d71f372472c0cc8aaa4b2d5031.js.map