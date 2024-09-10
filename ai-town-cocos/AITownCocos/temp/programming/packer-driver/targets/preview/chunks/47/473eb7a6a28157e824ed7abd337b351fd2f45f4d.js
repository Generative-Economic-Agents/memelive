System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createCompounder, lowerCase;
  return {
    setters: [function (_unresolved_) {
      createCompounder = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Converts `string`, as space separated words, to lower case.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the lower cased string.
       * @example
       *
       * _.lowerCase('--Foo-Bar--');
       * // => 'foo bar'
       *
       * _.lowerCase('fooBar');
       * // => 'foo bar'
       *
       * _.lowerCase('__FOO_BAR__');
       * // => 'foo bar'
       */
      lowerCase = createCompounder(function (result, word, index) {
        return result + (index ? ' ' : '') + word.toLowerCase();
      });

      _export("default", lowerCase);
    }
  };
});
//# sourceMappingURL=473eb7a6a28157e824ed7abd337b351fd2f45f4d.js.map