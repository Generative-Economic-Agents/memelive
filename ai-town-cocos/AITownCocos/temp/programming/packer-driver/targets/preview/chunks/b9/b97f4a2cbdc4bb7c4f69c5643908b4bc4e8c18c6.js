System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var createCompounder, upperFirst, startCase;
  return {
    setters: [function (_unresolved_) {
      createCompounder = _unresolved_.default;
    }, function (_unresolved_2) {
      upperFirst = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Converts `string` to
       * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
       *
       * @static
       * @memberOf _
       * @since 3.1.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the start cased string.
       * @example
       *
       * _.startCase('--foo-bar--');
       * // => 'Foo Bar'
       *
       * _.startCase('fooBar');
       * // => 'Foo Bar'
       *
       * _.startCase('__FOO_BAR__');
       * // => 'FOO BAR'
       */
      startCase = createCompounder(function (result, word, index) {
        return result + (index ? ' ' : '') + upperFirst(word);
      });

      _export("default", startCase);
    }
  };
});
//# sourceMappingURL=b97f4a2cbdc4bb7c4f69c5643908b4bc4e8c18c6.js.map