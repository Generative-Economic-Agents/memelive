System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var asciiWords, hasUnicodeWord, toString, unicodeWords;

  /**
   * Splits `string` into an array of its words.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {RegExp|string} [pattern] The pattern to match words.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the words of `string`.
   * @example
   *
   * _.words('fred, barney, & pebbles');
   * // => ['fred', 'barney', 'pebbles']
   *
   * _.words('fred, barney, & pebbles', /[^, ]+/g);
   * // => ['fred', 'barney', '&', 'pebbles']
   */
  function words(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? undefined : pattern;

    if (pattern === undefined) {
      return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }

    return string.match(pattern) || [];
  }

  return {
    setters: [function (_unresolved_) {
      asciiWords = _unresolved_.default;
    }, function (_unresolved_2) {
      hasUnicodeWord = _unresolved_2.default;
    }, function (_unresolved_3) {
      toString = _unresolved_3.default;
    }, function (_unresolved_4) {
      unicodeWords = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", words);
    }
  };
});
//# sourceMappingURL=141f8ad2c62dc7a7902ec810d4abae4496e47dc8.js.map