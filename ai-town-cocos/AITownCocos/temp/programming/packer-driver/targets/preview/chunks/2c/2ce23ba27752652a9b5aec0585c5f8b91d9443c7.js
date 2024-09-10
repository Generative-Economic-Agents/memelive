System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseForOwnRight, castFunction;

  /**
   * This method is like `_.forOwn` except that it iterates over properties of
   * `object` in the opposite order.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns `object`.
   * @see _.forOwn
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.forOwnRight(new Foo, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
   */
  function forOwnRight(object, iteratee) {
    return object && baseForOwnRight(object, castFunction(iteratee));
  }

  return {
    setters: [function (_unresolved_) {
      baseForOwnRight = _unresolved_.default;
    }, function (_unresolved_2) {
      castFunction = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", forOwnRight);
    }
  };
});
//# sourceMappingURL=2ce23ba27752652a9b5aec0585c5f8b91d9443c7.js.map