System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var createToPairs, keys, toPairs;
  return {
    setters: [function (_unresolved_) {
      createToPairs = _unresolved_.default;
    }, function (_unresolved_2) {
      keys = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Creates an array of own enumerable string keyed-value pairs for `object`
       * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
       * entries are returned.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @alias entries
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
       * _.toPairs(new Foo);
       * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
       */
      toPairs = createToPairs(keys);

      _export("default", toPairs);
    }
  };
});
//# sourceMappingURL=ed47b3e4c492b89dcd8c9b92ed651ee7c29c9f07.js.map