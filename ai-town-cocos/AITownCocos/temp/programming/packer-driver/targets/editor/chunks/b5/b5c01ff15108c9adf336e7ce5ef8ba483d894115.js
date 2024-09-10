System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var asciiSize, hasUnicode, unicodeSize;

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
  }

  return {
    setters: [function (_unresolved_) {
      asciiSize = _unresolved_.default;
    }, function (_unresolved_2) {
      hasUnicode = _unresolved_2.default;
    }, function (_unresolved_3) {
      unicodeSize = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", stringSize);
    }
  };
});
//# sourceMappingURL=b5c01ff15108c9adf336e7ce5ef8ba483d894115.js.map