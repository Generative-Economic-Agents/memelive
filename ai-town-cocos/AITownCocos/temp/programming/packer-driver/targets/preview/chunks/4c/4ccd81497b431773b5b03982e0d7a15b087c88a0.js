System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseFlatten, map, toInteger;

  /**
   * This method is like `_.flatMap` except that it recursively flattens the
   * mapped results up to `depth` times.
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {number} [depth=1] The maximum recursion depth.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * function duplicate(n) {
   *   return [[[n, n]]];
   * }
   *
   * _.flatMapDepth([1, 2], duplicate, 2);
   * // => [[1, 1], [2, 2]]
   */
  function flatMapDepth(collection, iteratee, depth) {
    depth = depth === undefined ? 1 : toInteger(depth);
    return baseFlatten(map(collection, iteratee), depth);
  }

  return {
    setters: [function (_unresolved_) {
      baseFlatten = _unresolved_.default;
    }, function (_unresolved_2) {
      map = _unresolved_2.default;
    }, function (_unresolved_3) {
      toInteger = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", flatMapDepth);
    }
  };
});
//# sourceMappingURL=4ccd81497b431773b5b03982e0d7a15b087c88a0.js.map