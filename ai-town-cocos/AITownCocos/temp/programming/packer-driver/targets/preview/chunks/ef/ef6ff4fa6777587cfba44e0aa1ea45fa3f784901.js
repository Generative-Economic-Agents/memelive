System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var arrayEachRight, baseEachRight, castFunction, isArray;

  /**
   * This method is like `_.forEach` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @alias eachRight
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEach
   * @example
   *
   * _.forEachRight([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `2` then `1`.
   */
  function forEachRight(collection, iteratee) {
    var func = isArray(collection) ? arrayEachRight : baseEachRight;
    return func(collection, castFunction(iteratee));
  }

  return {
    setters: [function (_unresolved_) {
      arrayEachRight = _unresolved_.default;
    }, function (_unresolved_2) {
      baseEachRight = _unresolved_2.default;
    }, function (_unresolved_3) {
      castFunction = _unresolved_3.default;
    }, function (_unresolved_4) {
      isArray = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", forEachRight);
    }
  };
});
//# sourceMappingURL=ef6ff4fa6777587cfba44e0aa1ea45fa3f784901.js.map