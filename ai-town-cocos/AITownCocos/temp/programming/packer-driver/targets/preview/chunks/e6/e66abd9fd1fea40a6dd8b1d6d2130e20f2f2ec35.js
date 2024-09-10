System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var escapeHtmlChar, toString, reUnescapedHtml, reHasUnescapedHtml;

  /**
   * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
   * corresponding HTML entities.
   *
   * **Note:** No other characters are escaped. To escape additional
   * characters use a third-party library like [_he_](https://mths.be/he).
   *
   * Though the ">" character is escaped for symmetry, characters like
   * ">" and "/" don't need escaping in HTML and have no special meaning
   * unless they're part of a tag or unquoted attribute value. See
   * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
   * (under "semi-related fun fact") for more details.
   *
   * When working with HTML you should always
   * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
   * XSS vectors.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to escape.
   * @returns {string} Returns the escaped string.
   * @example
   *
   * _.escape('fred, barney, & pebbles');
   * // => 'fred, barney, &amp; pebbles'
   */
  function escape(string) {
    string = toString(string);
    return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
  }

  return {
    setters: [function (_unresolved_) {
      escapeHtmlChar = _unresolved_.default;
    }, function (_unresolved_2) {
      toString = _unresolved_2.default;
    }],
    execute: function () {
      /** Used to match HTML entities and HTML characters. */
      reUnescapedHtml = /[&<>"']/g;
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

      _export("default", escape);
    }
  };
});
//# sourceMappingURL=e66abd9fd1fea40a6dd8b1d6d2130e20f2f2ec35.js.map