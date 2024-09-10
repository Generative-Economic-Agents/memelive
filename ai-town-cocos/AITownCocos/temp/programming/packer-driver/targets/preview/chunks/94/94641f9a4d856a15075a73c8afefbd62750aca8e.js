System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var baseToString, castSlice, charsStartIndex, stringToArray, toString, reTrimStart;

  /**
   * Removes leading whitespace or specified characters from `string`.
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
   * _.trimStart('  abc  ');
   * // => 'abc  '
   *
   * _.trimStart('-_-abc-_-', '_-');
   * // => 'abc-_-'
   */
  function trimStart(string, chars, guard) {
    string = toString(string);

    if (string && (guard || chars === undefined)) {
      return string.replace(reTrimStart, '');
    }

    if (!string || !(chars = baseToString(chars))) {
      return string;
    }

    var strSymbols = stringToArray(string),
        start = charsStartIndex(strSymbols, stringToArray(chars));
    return castSlice(strSymbols, start).join('');
  }

  return {
    setters: [function (_unresolved_) {
      baseToString = _unresolved_.default;
    }, function (_unresolved_2) {
      castSlice = _unresolved_2.default;
    }, function (_unresolved_3) {
      charsStartIndex = _unresolved_3.default;
    }, function (_unresolved_4) {
      stringToArray = _unresolved_4.default;
    }, function (_unresolved_5) {
      toString = _unresolved_5.default;
    }],
    execute: function () {
      /** Used to match leading whitespace. */
      reTrimStart = /^\s+/;

      _export("default", trimStart);
    }
  };
});
//# sourceMappingURL=94641f9a4d856a15075a73c8afefbd62750aca8e.js.map