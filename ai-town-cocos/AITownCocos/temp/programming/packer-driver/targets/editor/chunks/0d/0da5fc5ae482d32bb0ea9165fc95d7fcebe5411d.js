System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var toInteger;

  /**
   * Checks if `value` is an integer.
   *
   * **Note:** This method is based on
   * [`Number.isInteger`](https://mdn.io/Number/isInteger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
   * @example
   *
   * _.isInteger(3);
   * // => true
   *
   * _.isInteger(Number.MIN_VALUE);
   * // => false
   *
   * _.isInteger(Infinity);
   * // => false
   *
   * _.isInteger('3');
   * // => false
   */
  function isInteger(value) {
    return typeof value == 'number' && value == toInteger(value);
  }

  return {
    setters: [function (_unresolved_) {
      toInteger = _unresolved_.default;
    }],
    execute: function () {
      _export("default", isInteger);
    }
  };
});
//# sourceMappingURL=0da5fc5ae482d32bb0ea9165fc95d7fcebe5411d.js.map