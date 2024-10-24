System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var createToPairs, keysIn, toPairsIn;
  return {
    setters: [function (_unresolved_) {
      createToPairs = _unresolved_.default;
    }, function (_unresolved_2) {
      keysIn = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Creates an array of own and inherited enumerable string keyed-value pairs
       * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
       * or set, its entries are returned.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @alias entriesIn
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the key-value pairs.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.toPairsIn(new Foo);
       * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
       */
      toPairsIn = createToPairs(keysIn);

      _export("default", toPairsIn);
    }
  };
});
//# sourceMappingURL=0c2c6bf608d9e48072bb528621f7ffd72368288b.js.map