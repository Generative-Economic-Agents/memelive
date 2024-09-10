System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseDifference, baseFlatten, baseRest, isArrayLikeObject, difference;
  return {
    setters: [function (_unresolved_) {
      baseDifference = _unresolved_.default;
    }, function (_unresolved_2) {
      baseFlatten = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseRest = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArrayLikeObject = _unresolved_4.default;
    }],
    execute: function () {
      /**
       * Creates an array of `array` values not included in the other given arrays
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons. The order and references of result values are
       * determined by the first array.
       *
       * **Note:** Unlike `_.pullAll`, this method returns a new array.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {...Array} [values] The values to exclude.
       * @returns {Array} Returns the new array of filtered values.
       * @see _.without, _.xor
       * @example
       *
       * _.difference([2, 1], [2, 3]);
       * // => [1]
       */
      difference = baseRest(function (array, values) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
      });

      _export("default", difference);
    }
  };
});
//# sourceMappingURL=623b25e0f5c74a5389d6f40ba04f47d5f94efd2f.js.map