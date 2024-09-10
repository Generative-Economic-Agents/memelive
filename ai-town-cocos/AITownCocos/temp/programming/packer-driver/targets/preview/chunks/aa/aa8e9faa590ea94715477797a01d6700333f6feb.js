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
//# sourceMappingURL=aa8e9faa590ea94715477797a01d6700333f6feb.js.map