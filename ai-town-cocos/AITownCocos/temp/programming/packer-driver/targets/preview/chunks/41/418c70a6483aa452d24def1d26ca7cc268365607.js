System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var createPadding, stringSize, toInteger, toString;

  /**
   * Pads `string` on the right side if it's shorter than `length`. Padding
   * characters are truncated if they exceed `length`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to pad.
   * @param {number} [length=0] The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padded string.
   * @example
   *
   * _.padEnd('abc', 6);
   * // => 'abc   '
   *
   * _.padEnd('abc', 6, '_-');
   * // => 'abc_-_'
   *
   * _.padEnd('abc', 3);
   * // => 'abc'
   */
  function padEnd(string, length, chars) {
    string = toString(string);
    length = toInteger(length);
    var strLength = length ? stringSize(string) : 0;
    return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
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
      _export("default", padEnd);
    }
  };
});
//# sourceMappingURL=418c70a6483aa452d24def1d26ca7cc268365607.js.map