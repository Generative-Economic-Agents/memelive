System.register([], function (_export, _context) {
  "use strict";

  var reWhitespace;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}

    return index;
  }

  return {
    setters: [],
    execute: function () {
      /** Used to match a single whitespace character. */
      reWhitespace = /\s/;

      _export("default", trimmedEndIndex);
    }
  };
});
//# sourceMappingURL=e91103c3e94d08c3274eb4fbcac91b70945f0ac3.js.map