System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseExtremum, baseGt, baseIteratee;

  /**
   * This method is like `_.max` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the criterion by which
   * the value is ranked. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * var objects = [{ 'n': 1 }, { 'n': 2 }];
   *
   * _.maxBy(objects, function(o) { return o.n; });
   * // => { 'n': 2 }
   *
   * // The `_.property` iteratee shorthand.
   * _.maxBy(objects, 'n');
   * // => { 'n': 2 }
   */
  function maxBy(array, iteratee) {
    return array && array.length ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt) : undefined;
  }

  return {
    setters: [function (_unresolved_) {
      baseExtremum = _unresolved_.default;
    }, function (_unresolved_2) {
      baseGt = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseIteratee = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", maxBy);
    }
  };
});
//# sourceMappingURL=b3f41bb9ab35a6d163e0b65a3a781b5832e22a6b.js.map