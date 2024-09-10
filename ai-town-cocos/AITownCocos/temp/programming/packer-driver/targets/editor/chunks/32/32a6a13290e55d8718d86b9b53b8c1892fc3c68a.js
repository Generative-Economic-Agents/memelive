System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseAt, flatRest, at;
  return {
    setters: [function (_unresolved_) {
      baseAt = _unresolved_.default;
    }, function (_unresolved_2) {
      flatRest = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Creates an array of values corresponding to `paths` of `object`.
       *
       * @static
       * @memberOf _
       * @since 1.0.0
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {...(string|string[])} [paths] The property paths to pick.
       * @returns {Array} Returns the picked values.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
       *
       * _.at(object, ['a[0].b.c', 'a[1]']);
       * // => [3, 4]
       */
      at = flatRest(baseAt);

      _export("default", at);
    }
  };
});
//# sourceMappingURL=32a6a13290e55d8718d86b9b53b8c1892fc3c68a.js.map