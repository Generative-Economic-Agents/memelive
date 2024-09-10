System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseFlatten, map, INFINITY;

  /**
   * This method is like `_.flatMap` except that it recursively flattens the
   * mapped results.
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * function duplicate(n) {
   *   return [[[n, n]]];
   * }
   *
   * _.flatMapDeep([1, 2], duplicate);
   * // => [1, 1, 2, 2]
   */
  function flatMapDeep(collection, iteratee) {
    return baseFlatten(map(collection, iteratee), INFINITY);
  }

  return {
    setters: [function (_unresolved_) {
      baseFlatten = _unresolved_.default;
    }, function (_unresolved_2) {
      map = _unresolved_2.default;
    }],
    execute: function () {
      /** Used as references for various `Number` constants. */
      INFINITY = 1 / 0;

      _export("default", flatMapDeep);
    }
  };
});
//# sourceMappingURL=b43dbbebc0fc3cf083fa23a091d0699a77ca2225.js.map