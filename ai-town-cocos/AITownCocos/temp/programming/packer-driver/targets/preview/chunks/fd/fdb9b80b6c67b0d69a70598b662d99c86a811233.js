System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var toString;

  /**
   * Converts `string`, as a whole, to upper case just like
   * [String#toUpperCase](https://mdn.io/toUpperCase).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the upper cased string.
   * @example
   *
   * _.toUpper('--foo-bar--');
   * // => '--FOO-BAR--'
   *
   * _.toUpper('fooBar');
   * // => 'FOOBAR'
   *
   * _.toUpper('__foo_bar__');
   * // => '__FOO_BAR__'
   */
  function toUpper(value) {
    return toString(value).toUpperCase();
  }

  return {
    setters: [function (_unresolved_) {
      toString = _unresolved_.default;
    }],
    execute: function () {
      _export("default", toUpper);
    }
  };
});
//# sourceMappingURL=fdb9b80b6c67b0d69a70598b662d99c86a811233.js.map