System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseForRight, castFunction, keysIn;

  /**
   * This method is like `_.forIn` except that it iterates over properties of
   * `object` in the opposite order.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns `object`.
   * @see _.forIn
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.forInRight(new Foo, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
   */
  function forInRight(object, iteratee) {
    return object == null ? object : baseForRight(object, castFunction(iteratee), keysIn);
  }

  return {
    setters: [function (_unresolved_) {
      baseForRight = _unresolved_.default;
    }, function (_unresolved_2) {
      castFunction = _unresolved_2.default;
    }, function (_unresolved_3) {
      keysIn = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", forInRight);
    }
  };
});
//# sourceMappingURL=cae40a50d53bd0d62a638a695304b4d4fdc54e24.js.map