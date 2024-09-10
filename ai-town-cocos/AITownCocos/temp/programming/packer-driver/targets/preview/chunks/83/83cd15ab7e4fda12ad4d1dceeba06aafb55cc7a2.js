System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var coreJsData, isFunction, stubFalse, isMaskable;
  return {
    setters: [function (_unresolved_) {
      coreJsData = _unresolved_.default;
    }, function (_unresolved_2) {
      isFunction = _unresolved_2.default;
    }, function (_unresolved_3) {
      stubFalse = _unresolved_3.default;
    }],
    execute: function () {
      /**
       * Checks if `func` is capable of being masked.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
       */
      isMaskable = coreJsData ? isFunction : stubFalse;

      _export("default", isMaskable);
    }
  };
});
//# sourceMappingURL=83cd15ab7e4fda12ad4d1dceeba06aafb55cc7a2.js.map