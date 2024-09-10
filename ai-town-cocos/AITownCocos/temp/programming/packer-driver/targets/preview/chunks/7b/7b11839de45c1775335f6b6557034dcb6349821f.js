System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createCaseFirst, upperFirst;
  return {
    setters: [function (_unresolved_) {
      createCaseFirst = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Converts the first character of `string` to upper case.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the converted string.
       * @example
       *
       * _.upperFirst('fred');
       * // => 'Fred'
       *
       * _.upperFirst('FRED');
       * // => 'FRED'
       */
      upperFirst = createCaseFirst('toUpperCase');

      _export("default", upperFirst);
    }
  };
});
//# sourceMappingURL=7b11839de45c1775335f6b6557034dcb6349821f.js.map