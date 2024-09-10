System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var constant, defineProperty, identity, baseSetToString;
  return {
    setters: [function (_unresolved_) {
      constant = _unresolved_.default;
    }, function (_unresolved_2) {
      defineProperty = _unresolved_2.default;
    }, function (_unresolved_3) {
      identity = _unresolved_3.default;
    }],
    execute: function () {
      /**
       * The base implementation of `setToString` without support for hot loop shorting.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */
      baseSetToString = !defineProperty ? identity : function (func, string) {
        return defineProperty(func, 'toString', {
          'configurable': true,
          'enumerable': false,
          'value': constant(string),
          'writable': true
        });
      };

      _export("default", baseSetToString);
    }
  };
});
//# sourceMappingURL=80e3cc88b169538d97ffb2863a6bd8fccc68a956.js.map