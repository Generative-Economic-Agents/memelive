System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var basePick, flatRest, pick;
  return {
    setters: [function (_unresolved_) {
      basePick = _unresolved_.default;
    }, function (_unresolved_2) {
      flatRest = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Creates an object composed of the picked `object` properties.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The source object.
       * @param {...(string|string[])} [paths] The property paths to pick.
       * @returns {Object} Returns the new object.
       * @example
       *
       * var object = { 'a': 1, 'b': '2', 'c': 3 };
       *
       * _.pick(object, ['a', 'c']);
       * // => { 'a': 1, 'c': 3 }
       */
      pick = flatRest(function (object, paths) {
        return object == null ? {} : basePick(object, paths);
      });

      _export("default", pick);
    }
  };
});
//# sourceMappingURL=3c694b698e4af35b26750f1f3bdc19afc1602fa7.js.map