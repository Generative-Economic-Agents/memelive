System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var arrayMap, baseIntersection, baseRest, castArrayLikeObject, last, intersectionWith;
  return {
    setters: [function (_unresolved_) {
      arrayMap = _unresolved_.default;
    }, function (_unresolved_2) {
      baseIntersection = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseRest = _unresolved_3.default;
    }, function (_unresolved_4) {
      castArrayLikeObject = _unresolved_4.default;
    }, function (_unresolved_5) {
      last = _unresolved_5.default;
    }],
    execute: function () {
      /**
       * This method is like `_.intersection` except that it accepts `comparator`
       * which is invoked to compare elements of `arrays`. The order and references
       * of result values are determined by the first array. The comparator is
       * invoked with two arguments: (arrVal, othVal).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of intersecting values.
       * @example
       *
       * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
       * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
       *
       * _.intersectionWith(objects, others, _.isEqual);
       * // => [{ 'x': 1, 'y': 2 }]
       */
      intersectionWith = baseRest(function (arrays) {
        var comparator = last(arrays),
            mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == 'function' ? comparator : undefined;

        if (comparator) {
          mapped.pop();
        }

        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
      });

      _export("default", intersectionWith);
    }
  };
});
//# sourceMappingURL=40c89651f4eeed7129b5d3de53edf96738d37fbf.js.map