System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var createFind, findLastIndex, findLast;
  return {
    setters: [function (_unresolved_) {
      createFind = _unresolved_.default;
    }, function (_unresolved_2) {
      findLastIndex = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * This method is like `_.find` except that it iterates over elements of
       * `collection` from right to left.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @category Collection
       * @param {Array|Object} collection The collection to inspect.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @param {number} [fromIndex=collection.length-1] The index to search from.
       * @returns {*} Returns the matched element, else `undefined`.
       * @example
       *
       * _.findLast([1, 2, 3, 4], function(n) {
       *   return n % 2 == 1;
       * });
       * // => 3
       */
      findLast = createFind(findLastIndex);

      _export("default", findLast);
    }
  };
});
//# sourceMappingURL=509cdc712a76df0ba742a2fd21acc398eb0d37fd.js.map