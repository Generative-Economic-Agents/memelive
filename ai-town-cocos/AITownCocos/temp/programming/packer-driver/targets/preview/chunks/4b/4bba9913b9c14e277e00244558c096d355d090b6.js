System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var baseDifference, baseFlatten, baseIteratee, baseRest, isArrayLikeObject, last, differenceBy;
  return {
    setters: [function (_unresolved_) {
      baseDifference = _unresolved_.default;
    }, function (_unresolved_2) {
      baseFlatten = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseIteratee = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseRest = _unresolved_4.default;
    }, function (_unresolved_5) {
      isArrayLikeObject = _unresolved_5.default;
    }, function (_unresolved_6) {
      last = _unresolved_6.default;
    }],
    execute: function () {
      /**
       * This method is like `_.difference` except that it accepts `iteratee` which
       * is invoked for each element of `array` and `values` to generate the criterion
       * by which they're compared. The order and references of result values are
       * determined by the first array. The iteratee is invoked with one argument:
       * (value).
       *
       * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {...Array} [values] The values to exclude.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
       * // => [1.2]
       *
       * // The `_.property` iteratee shorthand.
       * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
       * // => [{ 'x': 2 }]
       */
      differenceBy = baseRest(function (array, values) {
        var iteratee = last(values);

        if (isArrayLikeObject(iteratee)) {
          iteratee = undefined;
        }

        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), baseIteratee(iteratee, 2)) : [];
      });

      _export("default", differenceBy);
    }
  };
});
//# sourceMappingURL=4bba9913b9c14e277e00244558c096d355d090b6.js.map