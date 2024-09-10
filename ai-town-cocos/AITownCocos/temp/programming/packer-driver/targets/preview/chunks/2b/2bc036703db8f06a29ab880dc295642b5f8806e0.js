System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var baseFlatten, baseRest, baseUniq, isArrayLikeObject, last, unionWith;
  return {
    setters: [function (_unresolved_) {
      baseFlatten = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseUniq = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArrayLikeObject = _unresolved_4.default;
    }, function (_unresolved_5) {
      last = _unresolved_5.default;
    }],
    execute: function () {
      /**
       * This method is like `_.union` except that it accepts `comparator` which
       * is invoked to compare elements of `arrays`. Result values are chosen from
       * the first array in which the value occurs. The comparator is invoked
       * with two arguments: (arrVal, othVal).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of combined values.
       * @example
       *
       * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
       * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
       *
       * _.unionWith(objects, others, _.isEqual);
       * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
       */
      unionWith = baseRest(function (arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == 'function' ? comparator : undefined;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
      });

      _export("default", unionWith);
    }
  };
});
//# sourceMappingURL=2bc036703db8f06a29ab880dc295642b5f8806e0.js.map