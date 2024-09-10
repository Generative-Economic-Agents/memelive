System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var baseToString, castSlice, hasUnicode, isObject, isRegExp, stringSize, stringToArray, toInteger, toString, DEFAULT_TRUNC_LENGTH, DEFAULT_TRUNC_OMISSION, reFlags;

  /**
   * Truncates `string` if it's longer than the given maximum string length.
   * The last characters of the truncated string are replaced with the omission
   * string which defaults to "...".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to truncate.
   * @param {Object} [options={}] The options object.
   * @param {number} [options.length=30] The maximum string length.
   * @param {string} [options.omission='...'] The string to indicate text is omitted.
   * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
   * @returns {string} Returns the truncated string.
   * @example
   *
   * _.truncate('hi-diddly-ho there, neighborino');
   * // => 'hi-diddly-ho there, neighbo...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'length': 24,
   *   'separator': ' '
   * });
   * // => 'hi-diddly-ho there,...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'length': 24,
   *   'separator': /,? +/
   * });
   * // => 'hi-diddly-ho there...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'omission': ' [...]'
   * });
   * // => 'hi-diddly-ho there, neig [...]'
   */
  function truncate(string, options) {
    var length = DEFAULT_TRUNC_LENGTH,
        omission = DEFAULT_TRUNC_OMISSION;

    if (isObject(options)) {
      var separator = 'separator' in options ? options.separator : separator;
      length = 'length' in options ? toInteger(options.length) : length;
      omission = 'omission' in options ? baseToString(options.omission) : omission;
    }

    string = toString(string);
    var strLength = string.length;

    if (hasUnicode(string)) {
      var strSymbols = stringToArray(string);
      strLength = strSymbols.length;
    }

    if (length >= strLength) {
      return string;
    }

    var end = length - stringSize(omission);

    if (end < 1) {
      return omission;
    }

    var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);

    if (separator === undefined) {
      return result + omission;
    }

    if (strSymbols) {
      end += result.length - end;
    }

    if (isRegExp(separator)) {
      if (string.slice(end).search(separator)) {
        var match,
            substring = result;

        if (!separator.global) {
          separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
        }

        separator.lastIndex = 0;

        while (match = separator.exec(substring)) {
          var newEnd = match.index;
        }

        result = result.slice(0, newEnd === undefined ? end : newEnd);
      }
    } else if (string.indexOf(baseToString(separator), end) != end) {
      var index = result.lastIndexOf(separator);

      if (index > -1) {
        result = result.slice(0, index);
      }
    }

    return result + omission;
  }

  return {
    setters: [function (_unresolved_) {
      baseToString = _unresolved_.default;
    }, function (_unresolved_2) {
      castSlice = _unresolved_2.default;
    }, function (_unresolved_3) {
      hasUnicode = _unresolved_3.default;
    }, function (_unresolved_4) {
      isObject = _unresolved_4.default;
    }, function (_unresolved_5) {
      isRegExp = _unresolved_5.default;
    }, function (_unresolved_6) {
      stringSize = _unresolved_6.default;
    }, function (_unresolved_7) {
      stringToArray = _unresolved_7.default;
    }, function (_unresolved_8) {
      toInteger = _unresolved_8.default;
    }, function (_unresolved_9) {
      toString = _unresolved_9.default;
    }],
    execute: function () {
      /** Used as default options for `_.truncate`. */
      DEFAULT_TRUNC_LENGTH = 30;
      DEFAULT_TRUNC_OMISSION = '...';
      /** Used to match `RegExp` flags from their coerced string values. */

      reFlags = /\w*$/;

      _export("default", truncate);
    }
  };
});
//# sourceMappingURL=9eb82ad44805718c9352612e84f097836a96c114.js.map