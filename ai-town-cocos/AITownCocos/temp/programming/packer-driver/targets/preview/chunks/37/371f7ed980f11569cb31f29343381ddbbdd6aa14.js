System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var arrayFilter, baseRest, baseXor, isArrayLikeObject, xor;
  return {
    setters: [function (_unresolved_) {
      arrayFilter = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseXor = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArrayLikeObject = _unresolved_4.default;
    }],
    execute: function () {
      /**
       * Creates an array of unique values that is the
       * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
       * of the given arrays. The order of result values is determined by the order
       * they occur in the arrays.
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @returns {Array} Returns the new array of filtered values.
       * @see _.difference, _.without
       * @example
       *
       * _.xor([2, 1], [2, 3]);
       * // => [1, 3]
       */
      xor = baseRest(function (arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });

      _export("default", xor);
    }
  };
});
//# sourceMappingURL=371f7ed980f11569cb31f29343381ddbbdd6aa14.js.map