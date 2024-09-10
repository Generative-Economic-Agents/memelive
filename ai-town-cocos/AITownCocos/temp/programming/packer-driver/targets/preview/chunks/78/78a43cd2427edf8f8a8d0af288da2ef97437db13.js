System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var trimmedEndIndex, reTrimStart;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
  }

  return {
    setters: [function (_unresolved_) {
      trimmedEndIndex = _unresolved_.default;
    }],
    execute: function () {
      /** Used to match leading whitespace. */
      reTrimStart = /^\s+/;

      _export("default", baseTrim);
    }
  };
});
//# sourceMappingURL=78a43cd2427edf8f8a8d0af288da2ef97437db13.js.map