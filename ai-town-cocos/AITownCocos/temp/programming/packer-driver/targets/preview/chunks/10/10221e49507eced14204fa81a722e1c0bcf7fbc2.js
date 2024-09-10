System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseIteratee, baseMean;

  /**
   * This method is like `_.mean` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the value to be averaged.
   * The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {number} Returns the mean.
   * @example
   *
   * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
   *
   * _.meanBy(objects, function(o) { return o.n; });
   * // => 5
   *
   * // The `_.property` iteratee shorthand.
   * _.meanBy(objects, 'n');
   * // => 5
   */
  function meanBy(array, iteratee) {
    return baseMean(array, baseIteratee(iteratee, 2));
  }

  return {
    setters: [function (_unresolved_) {
      baseIteratee = _unresolved_.default;
    }, function (_unresolved_2) {
      baseMean = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", meanBy);
    }
  };
});
//# sourceMappingURL=10221e49507eced14204fa81a722e1c0bcf7fbc2.js.map