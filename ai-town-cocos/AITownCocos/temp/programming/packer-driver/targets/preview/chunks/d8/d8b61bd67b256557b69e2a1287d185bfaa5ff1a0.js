System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var arrayFilter, baseIteratee, baseRest, baseXor, isArrayLikeObject, last, xorBy;
  return {
    setters: [function (_unresolved_) {
      arrayFilter = _unresolved_.default;
    }, function (_unresolved_2) {
      baseIteratee = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseRest = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseXor = _unresolved_4.default;
    }, function (_unresolved_5) {
      isArrayLikeObject = _unresolved_5.default;
    }, function (_unresolved_6) {
      last = _unresolved_6.default;
    }],
    execute: function () {
      /**
       * This method is like `_.xor` except that it accepts `iteratee` which is
       * invoked for each element of each `arrays` to generate the criterion by
       * which by which they're compared. The order of result values is determined
       * by the order they occur in the arrays. The iteratee is invoked with one
       * argument: (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
       * // => [1.2, 3.4]
       *
       * // The `_.property` iteratee shorthand.
       * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
       * // => [{ 'x': 2 }]
       */
      xorBy = baseRest(function (arrays) {
        var iteratee = last(arrays);

        if (isArrayLikeObject(iteratee)) {
          iteratee = undefined;
        }

        return baseXor(arrayFilter(arrays, isArrayLikeObject), baseIteratee(iteratee, 2));
      });

      _export("default", xorBy);
    }
  };
});
//# sourceMappingURL=d8b61bd67b256557b69e2a1287d185bfaa5ff1a0.js.map