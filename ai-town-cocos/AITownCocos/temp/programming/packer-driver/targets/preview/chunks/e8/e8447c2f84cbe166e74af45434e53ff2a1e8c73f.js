System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var arrayReduce, deburr, words, rsApos, reApos;

  /**
   * Creates a function like `_.camelCase`.
   *
   * @private
   * @param {Function} callback The function to combine each word.
   * @returns {Function} Returns the new compounder function.
   */
  function createCompounder(callback) {
    return function (string) {
      return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
    };
  }

  return {
    setters: [function (_unresolved_) {
      arrayReduce = _unresolved_.default;
    }, function (_unresolved_2) {
      deburr = _unresolved_2.default;
    }, function (_unresolved_3) {
      words = _unresolved_3.default;
    }],
    execute: function () {
      /** Used to compose unicode capture groups. */
      rsApos = "['\u2019]";
      /** Used to match apostrophes. */

      reApos = RegExp(rsApos, 'g');

      _export("default", createCompounder);
    }
  };
});
//# sourceMappingURL=e8447c2f84cbe166e74af45434e53ff2a1e8c73f.js.map