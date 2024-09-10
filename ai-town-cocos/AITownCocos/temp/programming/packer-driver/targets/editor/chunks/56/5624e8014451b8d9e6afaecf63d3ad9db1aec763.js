System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var baseDifference, baseFlatten, baseRest, isArrayLikeObject, last, differenceWith;
  return {
    setters: [function (_unresolved_) {
      baseDifference = _unresolved_.default;
    }, function (_unresolved_2) {
      baseFlatten = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseRest = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArrayLikeObject = _unresolved_4.default;
    }, function (_unresolved_5) {
      last = _unresolved_5.default;
    }],
    execute: function () {
      /**
       * This method is like `_.difference` except that it accepts `comparator`
       * which is invoked to compare elements of `array` to `values`. The order and
       * references of result values are determined by the first array. The comparator
       * is invoked with two arguments: (arrVal, othVal).
       *
       * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {...Array} [values] The values to exclude.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
       *
       * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
       * // => [{ 'x': 2, 'y': 1 }]
       */
      differenceWith = baseRest(function (array, values) {
        var comparator = last(values);

        if (isArrayLikeObject(comparator)) {
          comparator = undefined;
        }

        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
      });

      _export("default", differenceWith);
    }
  };
});
//# sourceMappingURL=5624e8014451b8d9e6afaecf63d3ad9db1aec763.js.map