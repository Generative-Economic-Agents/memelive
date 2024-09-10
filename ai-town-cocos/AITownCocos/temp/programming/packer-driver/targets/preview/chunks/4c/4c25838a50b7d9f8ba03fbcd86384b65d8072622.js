System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var baseFlatten, baseIteratee, baseRest, baseUniq, isArrayLikeObject, last, unionBy;
  return {
    setters: [function (_unresolved_) {
      baseFlatten = _unresolved_.default;
    }, function (_unresolved_2) {
      baseIteratee = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseRest = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseUniq = _unresolved_4.default;
    }, function (_unresolved_5) {
      isArrayLikeObject = _unresolved_5.default;
    }, function (_unresolved_6) {
      last = _unresolved_6.default;
    }],
    execute: function () {
      /**
       * This method is like `_.union` except that it accepts `iteratee` which is
       * invoked for each element of each `arrays` to generate the criterion by
       * which uniqueness is computed. Result values are chosen from the first
       * array in which the value occurs. The iteratee is invoked with one argument:
       * (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {Array} Returns the new array of combined values.
       * @example
       *
       * _.unionBy([2.1], [1.2, 2.3], Math.floor);
       * // => [2.1, 1.2]
       *
       * // The `_.property` iteratee shorthand.
       * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
       * // => [{ 'x': 1 }, { 'x': 2 }]
       */
      unionBy = baseRest(function (arrays) {
        var iteratee = last(arrays);

        if (isArrayLikeObject(iteratee)) {
          iteratee = undefined;
        }

        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), baseIteratee(iteratee, 2));
      });

      _export("default", unionBy);
    }
  };
});
//# sourceMappingURL=4c25838a50b7d9f8ba03fbcd86384b65d8072622.js.map