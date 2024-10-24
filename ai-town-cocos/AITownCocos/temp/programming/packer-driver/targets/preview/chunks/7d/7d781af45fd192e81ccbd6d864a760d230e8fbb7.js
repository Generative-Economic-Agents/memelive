System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var toFinite;

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger(value) {
    var result = toFinite(value),
        remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }

  return {
    setters: [function (_unresolved_) {
      toFinite = _unresolved_.default;
    }],
    execute: function () {
      _export("default", toInteger);
    }
  };
});
//# sourceMappingURL=7d781af45fd192e81ccbd6d864a760d230e8fbb7.js.map