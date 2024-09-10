System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var baseToString, castSlice, charsEndIndex, stringToArray, toString, trimmedEndIndex;

  /**
   * Removes trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trimEnd('  abc  ');
   * // => '  abc'
   *
   * _.trimEnd('-_-abc-_-', '_-');
   * // => '-_-abc'
   */
  function trimEnd(string, chars, guard) {
    string = toString(string);

    if (string && (guard || chars === undefined)) {
      return string.slice(0, trimmedEndIndex(string) + 1);
    }

    if (!string || !(chars = baseToString(chars))) {
      return string;
    }

    var strSymbols = stringToArray(string),
        end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
    return castSlice(strSymbols, 0, end).join('');
  }

  return {
    setters: [function (_unresolved_) {
      baseToString = _unresolved_.default;
    }, function (_unresolved_2) {
      castSlice = _unresolved_2.default;
    }, function (_unresolved_3) {
      charsEndIndex = _unresolved_3.default;
    }, function (_unresolved_4) {
      stringToArray = _unresolved_4.default;
    }, function (_unresolved_5) {
      toString = _unresolved_5.default;
    }, function (_unresolved_6) {
      trimmedEndIndex = _unresolved_6.default;
    }],
    execute: function () {
      _export("default", trimEnd);
    }
  };
});
//# sourceMappingURL=5293cdb4ff35333a6207a4b85af2583a04c507e1.js.map