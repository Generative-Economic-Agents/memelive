System.register([], function (_export, _context) {
  "use strict";

  var reHasUnicodeWord;

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  return {
    setters: [],
    execute: function () {
      /** Used to detect strings that need a more robust regexp to match words. */
      reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

      _export("default", hasUnicodeWord);
    }
  };
});
//# sourceMappingURL=7ff7ff3eda9400feec50dc641785ba6d75b84309.js.map