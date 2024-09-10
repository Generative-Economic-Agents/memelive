System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var root, toString, reTrimStart, nativeParseInt;

  /**
   * Converts `string` to an integer of the specified radix. If `radix` is
   * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
   * hexadecimal, in which case a `radix` of `16` is used.
   *
   * **Note:** This method aligns with the
   * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category String
   * @param {string} string The string to convert.
   * @param {number} [radix=10] The radix to interpret `value` by.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.parseInt('08');
   * // => 8
   *
   * _.map(['6', '08', '10'], _.parseInt);
   * // => [6, 8, 10]
   */
  function parseInt(string, radix, guard) {
    if (guard || radix == null) {
      radix = 0;
    } else if (radix) {
      radix = +radix;
    }

    return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
  }

  return {
    setters: [function (_unresolved_) {
      root = _unresolved_.default;
    }, function (_unresolved_2) {
      toString = _unresolved_2.default;
    }],
    execute: function () {
      /** Used to match leading whitespace. */
      reTrimStart = /^\s+/;
      /* Built-in method references for those with the same name as other `lodash` methods. */

      nativeParseInt = root.parseInt;

      _export("default", parseInt);
    }
  };
});
//# sourceMappingURL=36c5355ee2e7adc42b01606bd570888e5642159a.js.map