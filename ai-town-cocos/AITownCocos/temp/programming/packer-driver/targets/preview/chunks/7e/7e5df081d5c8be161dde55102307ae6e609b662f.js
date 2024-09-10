System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseDifference, baseRest, isArrayLikeObject, without;
  return {
    setters: [function (_unresolved_) {
      baseDifference = _unresolved_.default;
    }, function (_unresolved_2) {
      baseRest = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArrayLikeObject = _unresolved_3.default;
    }],
    execute: function () {
      /**
       * Creates an array excluding all given values using
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * **Note:** Unlike `_.pull`, this method returns a new array.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {...*} [values] The values to exclude.
       * @returns {Array} Returns the new array of filtered values.
       * @see _.difference, _.xor
       * @example
       *
       * _.without([2, 1, 2, 3], 1, 2);
       * // => [3]
       */
      without = baseRest(function (array, values) {
        return isArrayLikeObject(array) ? baseDifference(array, values) : [];
      });

      _export("default", without);
    }
  };
});
//# sourceMappingURL=7e5df081d5c8be161dde55102307ae6e609b662f.js.map