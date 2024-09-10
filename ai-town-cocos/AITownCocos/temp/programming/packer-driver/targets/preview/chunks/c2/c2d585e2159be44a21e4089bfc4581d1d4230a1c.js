System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var baseToString, castSlice, hasUnicode, isIterateeCall, isRegExp, stringToArray, toString, MAX_ARRAY_LENGTH;

  /**
   * Splits `string` by `separator`.
   *
   * **Note:** This method is based on
   * [`String#split`](https://mdn.io/String/split).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to split.
   * @param {RegExp|string} separator The separator pattern to split by.
   * @param {number} [limit] The length to truncate results to.
   * @returns {Array} Returns the string segments.
   * @example
   *
   * _.split('a-b-c', '-', 2);
   * // => ['a', 'b']
   */
  function split(string, separator, limit) {
    if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
      separator = limit = undefined;
    }

    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;

    if (!limit) {
      return [];
    }

    string = toString(string);

    if (string && (typeof separator == 'string' || separator != null && !isRegExp(separator))) {
      separator = baseToString(separator);

      if (!separator && hasUnicode(string)) {
        return castSlice(stringToArray(string), 0, limit);
      }
    }

    return string.split(separator, limit);
  }

  return {
    setters: [function (_unresolved_) {
      baseToString = _unresolved_.default;
    }, function (_unresolved_2) {
      castSlice = _unresolved_2.default;
    }, function (_unresolved_3) {
      hasUnicode = _unresolved_3.default;
    }, function (_unresolved_4) {
      isIterateeCall = _unresolved_4.default;
    }, function (_unresolved_5) {
      isRegExp = _unresolved_5.default;
    }, function (_unresolved_6) {
      stringToArray = _unresolved_6.default;
    }, function (_unresolved_7) {
      toString = _unresolved_7.default;
    }],
    execute: function () {
      /** Used as references for the maximum length and index of an array. */
      MAX_ARRAY_LENGTH = 4294967295;

      _export("default", split);
    }
  };
});
//# sourceMappingURL=c2d585e2159be44a21e4089bfc4581d1d4230a1c.js.map