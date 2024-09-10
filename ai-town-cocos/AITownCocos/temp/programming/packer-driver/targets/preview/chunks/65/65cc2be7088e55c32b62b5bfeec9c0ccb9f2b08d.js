System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var baseRepeat, baseToString, castSlice, hasUnicode, stringSize, stringToArray, nativeCeil;

  /**
   * Creates the padding for `string` based on `length`. The `chars` string
   * is truncated if the number of characters exceeds `length`.
   *
   * @private
   * @param {number} length The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padding for `string`.
   */
  function createPadding(length, chars) {
    chars = chars === undefined ? ' ' : baseToString(chars);
    var charsLength = chars.length;

    if (charsLength < 2) {
      return charsLength ? baseRepeat(chars, length) : chars;
    }

    var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
    return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
  }

  return {
    setters: [function (_unresolved_) {
      baseRepeat = _unresolved_.default;
    }, function (_unresolved_2) {
      baseToString = _unresolved_2.default;
    }, function (_unresolved_3) {
      castSlice = _unresolved_3.default;
    }, function (_unresolved_4) {
      hasUnicode = _unresolved_4.default;
    }, function (_unresolved_5) {
      stringSize = _unresolved_5.default;
    }, function (_unresolved_6) {
      stringToArray = _unresolved_6.default;
    }],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeCeil = Math.ceil;

      _export("default", createPadding);
    }
  };
});
//# sourceMappingURL=65cc2be7088e55c32b62b5bfeec9c0ccb9f2b08d.js.map