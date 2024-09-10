System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseFor, castFunction, keysIn;

  /**
   * Iterates over own and inherited enumerable string keyed properties of an
   * object and invokes `iteratee` for each property. The iteratee is invoked
   * with three arguments: (value, key, object). Iteratee functions may exit
   * iteration early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 0.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns `object`.
   * @see _.forInRight
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.forIn(new Foo, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
   */
  function forIn(object, iteratee) {
    return object == null ? object : baseFor(object, castFunction(iteratee), keysIn);
  }

  return {
    setters: [function (_unresolved_) {
      baseFor = _unresolved_.default;
    }, function (_unresolved_2) {
      castFunction = _unresolved_2.default;
    }, function (_unresolved_3) {
      keysIn = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", forIn);
    }
  };
});
//# sourceMappingURL=1ce890f63e3b9e1a8869998d04feee38d8136cc9.js.map