System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createCompounder, kebabCase;
  return {
    setters: [function (_unresolved_) {
      createCompounder = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Converts `string` to
       * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the kebab cased string.
       * @example
       *
       * _.kebabCase('Foo Bar');
       * // => 'foo-bar'
       *
       * _.kebabCase('fooBar');
       * // => 'foo-bar'
       *
       * _.kebabCase('__FOO_BAR__');
       * // => 'foo-bar'
       */
      kebabCase = createCompounder(function (result, word, index) {
        return result + (index ? '-' : '') + word.toLowerCase();
      });

      _export("default", kebabCase);
    }
  };
});
//# sourceMappingURL=021122a292876a05d8e1c64cee8f400b9a7a63ca.js.map