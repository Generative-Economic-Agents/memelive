System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var createCompounder, snakeCase;
  return {
    setters: [function (_unresolved_) {
      createCompounder = _unresolved_.default;
    }],
    execute: function () {
      /**
       * Converts `string` to
       * [snake case](https://en.wikipedia.org/wiki/Snake_case).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the snake cased string.
       * @example
       *
       * _.snakeCase('Foo Bar');
       * // => 'foo_bar'
       *
       * _.snakeCase('fooBar');
       * // => 'foo_bar'
       *
       * _.snakeCase('--FOO-BAR--');
       * // => 'foo_bar'
       */
      snakeCase = createCompounder(function (result, word, index) {
        return result + (index ? '_' : '') + word.toLowerCase();
      });

      _export("default", snakeCase);
    }
  };
});
//# sourceMappingURL=2599dd1c4d8bfa89c5c2702fb16338aa76599abf.js.map