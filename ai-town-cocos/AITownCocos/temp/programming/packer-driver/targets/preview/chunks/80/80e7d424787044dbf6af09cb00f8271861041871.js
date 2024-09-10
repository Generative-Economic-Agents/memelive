System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var createPadding, stringSize, toInteger, toString, nativeCeil, nativeFloor;

  /**
   * Pads `string` on the left and right sides if it's shorter than `length`.
   * Padding characters are truncated if they can't be evenly divided by `length`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to pad.
   * @param {number} [length=0] The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padded string.
   * @example
   *
   * _.pad('abc', 8);
   * // => '  abc   '
   *
   * _.pad('abc', 8, '_-');
   * // => '_-abc_-_'
   *
   * _.pad('abc', 3);
   * // => 'abc'
   */
  function pad(string, length, chars) {
    string = toString(string);
    length = toInteger(length);
    var strLength = length ? stringSize(string) : 0;

    if (!length || strLength >= length) {
      return string;
    }

    var mid = (length - strLength) / 2;
    return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
  }

  return {
    setters: [function (_unresolved_) {
      createPadding = _unresolved_.default;
    }, function (_unresolved_2) {
      stringSize = _unresolved_2.default;
    }, function (_unresolved_3) {
      toInteger = _unresolved_3.default;
    }, function (_unresolved_4) {
      toString = _unresolved_4.default;
    }],
    execute: function () {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      nativeCeil = Math.ceil;
      nativeFloor = Math.floor;

      _export("default", pad);
    }
  };
});
//# sourceMappingURL=80e7d424787044dbf6af09cb00f8271861041871.js.map