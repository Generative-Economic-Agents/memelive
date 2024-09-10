System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var baseFlatten, baseRest, baseUniq, isArrayLikeObject, union;
  return {
    setters: [function (_unresolved_) {
      baseFlatten = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseUniq = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArrayLikeObject = _unresolved_4.default;
    }],
    execute: function () {
      /**
       * Creates an array of unique values, in order, from all given arrays using
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @returns {Array} Returns the new array of combined values.
       * @example
       *
       * _.union([2], [1, 2]);
       * // => [2, 1]
       */
      union = baseRest(function (arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });

      _export("default", union);
    }
  };
});
//# sourceMappingURL=a5e1518b20f2bfccb91d1a4ba776127d6a06f84c.js.map