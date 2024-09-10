System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var arrayFilter, baseRest, baseXor, isArrayLikeObject, last, xorWith;
  return {
    setters: [function (_unresolved_) {
      arrayFilter = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseXor = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArrayLikeObject = _unresolved_4.default;
    }, function (_unresolved_5) {
      last = _unresolved_5.default;
    }],
    execute: function () {
      /**
       * This method is like `_.xor` except that it accepts `comparator` which is
       * invoked to compare elements of `arrays`. The order of result values is
       * determined by the order they occur in the arrays. The comparator is invoked
       * with two arguments: (arrVal, othVal).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
       * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
       *
       * _.xorWith(objects, others, _.isEqual);
       * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
       */
      xorWith = baseRest(function (arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == 'function' ? comparator : undefined;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
      });

      _export("default", xorWith);
    }
  };
});
//# sourceMappingURL=27da228886c26be85e8ce3d82c24f8b74d0a237c.js.map