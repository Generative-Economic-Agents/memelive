System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseTrim, isObject, isSymbol, NAN, reIsBadHex, reIsBinary, reIsOctal, freeParseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }

    if (isSymbol(value)) {
      return NAN;
    }

    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? other + '' : other;
    }

    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }

    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }

  return {
    setters: [function (_unresolved_) {
      baseTrim = _unresolved_.default;
    }, function (_unresolved_2) {
      isObject = _unresolved_2.default;
    }, function (_unresolved_3) {
      isSymbol = _unresolved_3.default;
    }],
    execute: function () {
      /** Used as references for various `Number` constants. */
      NAN = 0 / 0;
      /** Used to detect bad signed hexadecimal string values. */

      reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      /** Used to detect binary string values. */

      reIsBinary = /^0b[01]+$/i;
      /** Used to detect octal string values. */

      reIsOctal = /^0o[0-7]+$/i;
      /** Built-in method references without a dependency on `root`. */

      freeParseInt = parseInt;

      _export("default", toNumber);
    }
  };
});
//# sourceMappingURL=94d8038ced864c2a86e8962d9b4738d14a7f2195.js.map