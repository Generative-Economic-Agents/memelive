System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseRest, unzipWith, zipWith;
  return {
    setters: [function (_unresolved_) {
      baseRest = _unresolved_.default;
    }, function (_unresolved_2) {
      unzipWith = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * This method is like `_.zip` except that it accepts `iteratee` to specify
       * how grouped values should be combined. The iteratee is invoked with the
       * elements of each group: (...group).
       *
       * @static
       * @memberOf _
       * @since 3.8.0
       * @category Array
       * @param {...Array} [arrays] The arrays to process.
       * @param {Function} [iteratee=_.identity] The function to combine
       *  grouped values.
       * @returns {Array} Returns the new array of grouped elements.
       * @example
       *
       * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
       *   return a + b + c;
       * });
       * // => [111, 222]
       */
      zipWith = baseRest(function (arrays) {
        var length = arrays.length,
            iteratee = length > 1 ? arrays[length - 1] : undefined;
        iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
        return unzipWith(arrays, iteratee);
      });

      _export("default", zipWith);
    }
  };
});
//# sourceMappingURL=74e305c12521ee4637810127d173e8228a0ca564.js.map