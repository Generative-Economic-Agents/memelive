System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var toString;

  /**
   * Replaces matches for `pattern` in `string` with `replacement`.
   *
   * **Note:** This method is based on
   * [`String#replace`](https://mdn.io/String/replace).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to modify.
   * @param {RegExp|string} pattern The pattern to replace.
   * @param {Function|string} replacement The match replacement.
   * @returns {string} Returns the modified string.
   * @example
   *
   * _.replace('Hi Fred', 'Fred', 'Barney');
   * // => 'Hi Barney'
   */
  function replace() {
    var args = arguments,
        string = toString(args[0]);
    return args.length < 3 ? string : string.replace(args[1], args[2]);
  }

  return {
    setters: [function (_unresolved_) {
      toString = _unresolved_.default;
    }],
    execute: function () {
      _export("default", replace);
    }
  };
});
//# sourceMappingURL=d024d7ced861253c06712d882d00316d49f277e5.js.map