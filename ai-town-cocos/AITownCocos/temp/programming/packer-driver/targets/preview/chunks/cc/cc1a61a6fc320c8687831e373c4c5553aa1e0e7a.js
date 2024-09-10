System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var toString, reRegExpChar, reHasRegExpChar;

  /**
   * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
   * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to escape.
   * @returns {string} Returns the escaped string.
   * @example
   *
   * _.escapeRegExp('[lodash](https://lodash.com/)');
   * // => '\[lodash\]\(https://lodash\.com/\)'
   */
  function escapeRegExp(string) {
    string = toString(string);
    return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
  }

  return {
    setters: [function (_unresolved_) {
      toString = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Used to match `RegExp`
       * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
       */
      reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      reHasRegExpChar = RegExp(reRegExpChar.source);

      _export("default", escapeRegExp);
    }
  };
});
//# sourceMappingURL=cc1a61a6fc320c8687831e373c4c5553aa1e0e7a.js.map