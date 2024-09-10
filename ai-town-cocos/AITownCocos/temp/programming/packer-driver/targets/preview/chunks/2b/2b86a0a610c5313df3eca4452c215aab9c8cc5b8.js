System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var getNative, defineProperty;
  return {
    setters: [function (_unresolved_) {
      getNative = _unresolved_.default;
    }],
    execute: function () {
      defineProperty = function () {
        try {
          var func = getNative(Object, 'defineProperty');
          func({}, '', {});
          return func;
        } catch (e) {}
      }();

      _export("default", defineProperty);
    }
  };
});
//# sourceMappingURL=2b86a0a610c5313df3eca4452c215aab9c8cc5b8.js.map