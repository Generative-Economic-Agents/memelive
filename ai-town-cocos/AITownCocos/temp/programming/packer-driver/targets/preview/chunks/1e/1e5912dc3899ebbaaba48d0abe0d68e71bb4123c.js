System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var baseToString, baseTrim, castSlice, charsEndIndex, charsStartIndex, stringToArray, toString;

  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */
  function trim(string, chars, guard) {
    string = toString(string);

    if (string && (guard || chars === undefined)) {
      return baseTrim(string);
    }

    if (!string || !(chars = baseToString(chars))) {
      return string;
    }

    var strSymbols = stringToArray(string),
        chrSymbols = stringToArray(chars),
        start = charsStartIndex(strSymbols, chrSymbols),
        end = charsEndIndex(strSymbols, chrSymbols) + 1;
    return castSlice(strSymbols, start, end).join('');
  }

  return {
    setters: [function (_unresolved_) {
      baseToString = _unresolved_.default;
    }, function (_unresolved_2) {
      baseTrim = _unresolved_2.default;
    }, function (_unresolved_3) {
      castSlice = _unresolved_3.default;
    }, function (_unresolved_4) {
      charsEndIndex = _unresolved_4.default;
    }, function (_unresolved_5) {
      charsStartIndex = _unresolved_5.default;
    }, function (_unresolved_6) {
      stringToArray = _unresolved_6.default;
    }, function (_unresolved_7) {
      toString = _unresolved_7.default;
    }],
    execute: function () {
      _export("default", trim);
    }
  };
});
//# sourceMappingURL=1e5912dc3899ebbaaba48d0abe0d68e71bb4123c.js.map