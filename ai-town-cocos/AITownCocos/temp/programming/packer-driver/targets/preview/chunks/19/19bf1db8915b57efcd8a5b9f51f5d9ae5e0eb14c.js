System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var arrayLikeKeys, baseKeysIn, isArrayLike;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  return {
    setters: [function (_unresolved_) {
      arrayLikeKeys = _unresolved_.default;
    }, function (_unresolved_2) {
      baseKeysIn = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArrayLike = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", keysIn);
    }
  };
});
//# sourceMappingURL=19bf1db8915b57efcd8a5b9f51f5d9ae5e0eb14c.js.map