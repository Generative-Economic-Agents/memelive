System.register([], function (_export, _context) {
  "use strict";

  var reAsciiWord;

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  return {
    setters: [],
    execute: function () {
      /** Used to match words composed of alphanumeric characters. */
      reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

      _export("default", asciiWords);
    }
  };
});
//# sourceMappingURL=0b722dd285530d6598dca4c28f83bac0136c99a6.js.map