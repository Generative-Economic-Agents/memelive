System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var arrayMap, baseIntersection, baseIteratee, baseRest, castArrayLikeObject, last, intersectionBy;
  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }, function (_unresolved_2) {
      baseIntersection = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseIteratee = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseRest = _unresolved_4.default;
    }, function (_unresolved_5) {
      castArrayLikeObject = _unresolved_5.default;
    }, function (_unresolved_6) {
      last = _unresolved_6.default;
    }],
    execute: function () {
      /**
       * This method is like `_.intersection` except that it accepts `iteratee`
       * which is invoked for each element of each `arrays` to generate the criterion
       * by which they're compared. The order and references of result values are
       * determined by the first array. The iteratee is invoked with one argument:
       * (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {Array} Returns the new array of intersecting values.
       * @example
       *
       * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
       * // => [2.1]
       *
       * // The `_.property` iteratee shorthand.
       * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
       * // => [{ 'x': 1 }]
       */
      intersectionBy = baseRest(function (arrays) {
        var iteratee = last(arrays),
            mapped = arrayMap(arrays, castArrayLikeObject);

        if (iteratee === last(mapped)) {
          iteratee = undefined;
        } else {
          mapped.pop();
        }

        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, baseIteratee(iteratee, 2)) : [];
      });

      _export("default", intersectionBy);
    }
  };
});
//# sourceMappingURL=c5b606ad4a5557086767f2502be3116a0219f6b3.js.map