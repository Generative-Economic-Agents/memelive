System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseIteratee, baseSortedIndexBy;

  /**
   * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
   * which is invoked for `value` and each element of `array` to compute their
   * sort ranking. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   * @example
   *
   * var objects = [{ 'x': 4 }, { 'x': 5 }];
   *
   * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
   * // => 1
   *
   * // The `_.property` iteratee shorthand.
   * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
   * // => 1
   */
  function sortedLastIndexBy(array, value, iteratee) {
    return baseSortedIndexBy(array, value, baseIteratee(iteratee, 2), true);
  }

  return {
    setters: [function (_unresolved_) {
      baseIteratee = _unresolved_.default;
    }, function (_unresolved_2) {
      baseSortedIndexBy = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", sortedLastIndexBy);
    }
  };
});
//# sourceMappingURL=472d283b04429969e0f6bc43857e53503f59f69a.js.map