System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var toString, unescapeHtmlChar, reEscapedHtml, reHasEscapedHtml;

  /**
   * The inverse of `_.escape`; this method converts the HTML entities
   * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
   * their corresponding characters.
   *
   * **Note:** No other HTML entities are unescaped. To unescape additional
   * HTML entities use a third-party library like [_he_](https://mths.be/he).
   *
   * @static
   * @memberOf _
   * @since 0.6.0
   * @category String
   * @param {string} [string=''] The string to unescape.
   * @returns {string} Returns the unescaped string.
   * @example
   *
   * _.unescape('fred, barney, &amp; pebbles');
   * // => 'fred, barney, & pebbles'
   */
  function unescape(string) {
    string = toString(string);
    return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
  }

  return {
    setters: [function (_unresolved_) {
      toString = _unresolved_.default;
    }, function (_unresolved_2) {
      unescapeHtmlChar = _unresolved_2.default;
    }],
    execute: function () {
      /** Used to match HTML entities and HTML characters. */
      reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
      reHasEscapedHtml = RegExp(reEscapedHtml.source);

      _export("default", unescape);
    }
  };
});
//# sourceMappingURL=67c575aff110e55d3bd91fe6d4898d45d5d0a947.js.map