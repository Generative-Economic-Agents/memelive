System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var asciiToArray, hasUnicode, unicodeToArray;

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }

  return {
    setters: [function (_unresolved_) {
      asciiToArray = _unresolved_.default;
    }, function (_unresolved_2) {
      hasUnicode = _unresolved_2.default;
    }, function (_unresolved_3) {
      unicodeToArray = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", stringToArray);
    }
  };
});
//# sourceMappingURL=5ea61ebb5a3b6cdd8e58276a94cb18d8edd5e1b8.js.map