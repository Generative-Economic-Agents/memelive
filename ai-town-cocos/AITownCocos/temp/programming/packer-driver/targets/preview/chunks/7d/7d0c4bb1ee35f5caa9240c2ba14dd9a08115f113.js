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
//# sourceMappingURL=7d0c4bb1ee35f5caa9240c2ba14dd9a08115f113.js.map