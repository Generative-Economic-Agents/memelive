System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createCaseFirst, lowerFirst;
  return {
    setters: [function (_unresolved_) {
      createCaseFirst = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Converts the first character of `string` to lower case.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the converted string.
       * @example
       *
       * _.lowerFirst('Fred');
       * // => 'fred'
       *
       * _.lowerFirst('FRED');
       * // => 'fRED'
       */
      lowerFirst = createCaseFirst('toLowerCase');

      _export("default", lowerFirst);
    }
  };
});
//# sourceMappingURL=4d8fd3816fc5b21a96b1b5a19bb4bbce66206408.js.map