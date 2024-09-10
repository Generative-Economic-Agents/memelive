System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var root, nativeIsFinite;

  /**
   * Checks if `value` is a finite primitive number.
   *
   * **Note:** This method is based on
   * [`Number.isFinite`](https://mdn.io/Number/isFinite).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
   * @example
   *
   * _.isFinite(3);
   * // => true
   *
   * _.isFinite(Number.MIN_VALUE);
   * // => true
   *
   * _.isFinite(Infinity);
   * // => false
   *
   * _.isFinite('3');
   * // => false
   */
  function isFinite(value) {
    return typeof value == 'number' && nativeIsFinite(value);
  }

  return {
    setters: [function (_unresolved_) {
      root = _unresolved_.default;
    }],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeIsFinite = root.isFinite;

      _export("default", isFinite);
    }
  };
});
//# sourceMappingURL=30c5ab0f51c9da78264c3dede083a90c4a965974.js.map