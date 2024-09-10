System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var toString;

  /**
   * Converts `string`, as a whole, to lower case just like
   * [String#toLowerCase](https://mdn.io/toLowerCase).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the lower cased string.
   * @example
   *
   * _.toLower('--Foo-Bar--');
   * // => '--foo-bar--'
   *
   * _.toLower('fooBar');
   * // => 'foobar'
   *
   * _.toLower('__FOO_BAR__');
   * // => '__foo_bar__'
   */
  function toLower(value) {
    return toString(value).toLowerCase();
  }

  return {
    setters: [function (_unresolved_) {
      toString = _unresolved_.default;
    }],
    execute: function () {
      _export("default", toLower);
    }
  };
});
//# sourceMappingURL=c14107068dae02927ec95a259d7a96abe180c56c.js.map