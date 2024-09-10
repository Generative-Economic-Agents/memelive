System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var capitalize, createCompounder, camelCase;
  return {
    setters: [function (_unresolved_) {
      capitalize = _unresolved_.default;
    }, function (_unresolved_2) {
      createCompounder = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the camel cased string.
       * @example
       *
       * _.camelCase('Foo Bar');
       * // => 'fooBar'
       *
       * _.camelCase('--foo-bar--');
       * // => 'fooBar'
       *
       * _.camelCase('__FOO_BAR__');
       * // => 'fooBar'
       */
      camelCase = createCompounder(function (result, word, index) {
        word = word.toLowerCase();
        return result + (index ? capitalize(word) : word);
      });

      _export("default", camelCase);
    }
  };
});
//# sourceMappingURL=35a2b215cfe9fee1234b7e51eb937e2b5e4d519b.js.map