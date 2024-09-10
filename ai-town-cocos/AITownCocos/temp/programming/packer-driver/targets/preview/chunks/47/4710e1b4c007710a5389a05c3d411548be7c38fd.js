System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseSetToString, shortOut, setToString;
  return {
    setters: [function (_unresolved_) {
      baseSetToString = _unresolved_.default;
    }, function (_unresolved_2) {
      shortOut = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Sets the `toString` method of `func` to return `string`.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */
      setToString = shortOut(baseSetToString);

      _export("default", setToString);
    }
  };
});
//# sourceMappingURL=4710e1b4c007710a5389a05c3d411548be7c38fd.js.map