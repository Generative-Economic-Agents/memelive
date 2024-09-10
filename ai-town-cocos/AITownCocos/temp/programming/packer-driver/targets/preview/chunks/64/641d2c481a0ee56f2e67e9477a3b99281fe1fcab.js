System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var isFunction, isLength;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  return {
    setters: [function (_unresolved_) {
      isFunction = _unresolved_.default;
    }, function (_unresolved_2) {
      isLength = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", isArrayLike);
    }
  };
});
//# sourceMappingURL=641d2c481a0ee56f2e67e9477a3b99281fe1fcab.js.map