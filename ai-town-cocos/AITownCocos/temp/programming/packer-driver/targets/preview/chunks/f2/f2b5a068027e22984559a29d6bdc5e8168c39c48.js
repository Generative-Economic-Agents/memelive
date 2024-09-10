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
//# sourceMappingURL=f2b5a068027e22984559a29d6bdc5e8168c39c48.js.map