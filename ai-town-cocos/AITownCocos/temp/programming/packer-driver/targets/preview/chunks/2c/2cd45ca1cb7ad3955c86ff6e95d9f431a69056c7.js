System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var castSlice, hasUnicode, stringToArray, toString;

  /**
   * Creates a function like `_.lowerFirst`.
   *
   * @private
   * @param {string} methodName The name of the `String` case method to use.
   * @returns {Function} Returns the new case function.
   */
  function createCaseFirst(methodName) {
    return function (string) {
      string = toString(string);
      var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
      var chr = strSymbols ? strSymbols[0] : string.charAt(0);
      var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
      return chr[methodName]() + trailing;
    };
  }

  return {
    setters: [function (_unresolved_) {
      castSlice = _unresolved_.default;
    }, function (_unresolved_2) {
      hasUnicode = _unresolved_2.default;
    }, function (_unresolved_3) {
      stringToArray = _unresolved_3.default;
    }, function (_unresolved_4) {
      toString = _unresolved_4.default;
    }],
    execute: function () {
      _export("default", createCaseFirst);
    }
  };
});
//# sourceMappingURL=2cd45ca1cb7ad3955c86ff6e95d9f431a69056c7.js.map