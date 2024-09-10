System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseForOwn, castFunction;

  /**
   * Iterates over own enumerable string keyed properties of an object and
   * invokes `iteratee` for each property. The iteratee is invoked with three
   * arguments: (value, key, object). Iteratee functions may exit iteration
   * early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 0.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns `object`.
   * @see _.forOwnRight
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.forOwn(new Foo, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */
  function forOwn(object, iteratee) {
    return object && baseForOwn(object, castFunction(iteratee));
  }

  return {
    setters: [function (_unresolved_) {
      baseForOwn = _unresolved_.default;
    }, function (_unresolved_2) {
      castFunction = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", forOwn);
    }
  };
});
//# sourceMappingURL=c7f7ff708e5018d76cd44fd8c265d2c5bd049fff.js.map