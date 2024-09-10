System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createCompounder, upperCase;
  return {
    setters: [function (_unresolved_) {
      createCompounder = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Converts `string`, as space separated words, to upper case.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the upper cased string.
       * @example
       *
       * _.upperCase('--foo-bar');
       * // => 'FOO BAR'
       *
       * _.upperCase('fooBar');
       * // => 'FOO BAR'
       *
       * _.upperCase('__foo_bar__');
       * // => 'FOO BAR'
       */
      upperCase = createCompounder(function (result, word, index) {
        return result + (index ? ' ' : '') + word.toUpperCase();
      });

      _export("default", upperCase);
    }
  };
});
//# sourceMappingURL=b74e21f36e3ba7c523e6ac99e5b9d95b466e688f.js.map