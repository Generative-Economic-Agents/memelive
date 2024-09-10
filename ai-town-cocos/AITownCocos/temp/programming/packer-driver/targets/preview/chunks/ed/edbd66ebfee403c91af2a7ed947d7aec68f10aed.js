System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var arrayLikeKeys, baseKeys, isArrayLike;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
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
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  return {
    setters: [function (_unresolved_) {
      arrayLikeKeys = _unresolved_.default;
    }, function (_unresolved_2) {
      baseKeys = _unresolved_2.default;
    }, function (_unresolved_3) {
      isArrayLike = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", keys);
    }
  };
});
//# sourceMappingURL=edbd66ebfee403c91af2a7ed947d7aec68f10aed.js.map