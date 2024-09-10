System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var arrayReduceRight, baseEachRight, baseIteratee, baseReduce, isArray;

  /**
   * This method is like `_.reduce` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @returns {*} Returns the accumulated value.
   * @see _.reduce
   * @example
   *
   * var array = [[0, 1], [2, 3], [4, 5]];
   *
   * _.reduceRight(array, function(flattened, other) {
   *   return flattened.concat(other);
   * }, []);
   * // => [4, 5, 2, 3, 0, 1]
   */
  function reduceRight(collection, iteratee, accumulator) {
    var func = isArray(collection) ? arrayReduceRight : baseReduce,
        initAccum = arguments.length < 3;
    return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
  }

  return {
    setters: [function (_unresolved_) {
      arrayReduceRight = _unresolved_.default;
    }, function (_unresolved_2) {
      baseEachRight = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseIteratee = _unresolved_3.default;
    }, function (_unresolved_4) {
      baseReduce = _unresolved_4.default;
    }, function (_unresolved_5) {
      isArray = _unresolved_5.default;
    }],
    execute: function () {
      _export("default", reduceRight);
    }
  };
});
//# sourceMappingURL=e8328dbcca4b8219a7e646693049ddb4533c2e6f.js.map