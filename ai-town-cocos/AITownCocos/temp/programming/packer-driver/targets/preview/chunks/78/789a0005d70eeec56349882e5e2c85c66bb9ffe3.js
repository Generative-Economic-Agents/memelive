System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var arrayMap, baseIntersection, baseRest, castArrayLikeObject, intersection;
  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }, function (_unresolved_2) {
      baseIntersection = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseRest = _unresolved_3.default;
    }, function (_unresolved_4) {
      castArrayLikeObject = _unresolved_4.default;
    }],
    execute: function () {
      /**
       * Creates an array of unique values that are included in all given arrays
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons. The order and references of result values are
       * determined by the first array.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @returns {Array} Returns the new array of intersecting values.
       * @example
       *
       * _.intersection([2, 1], [2, 3]);
       * // => [2]
       */
      intersection = baseRest(function (arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });

      _export("default", intersection);
    }
  };
});
//# sourceMappingURL=789a0005d70eeec56349882e5e2c85c66bb9ffe3.js.map