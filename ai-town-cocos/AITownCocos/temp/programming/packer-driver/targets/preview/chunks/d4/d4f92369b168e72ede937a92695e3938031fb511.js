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
//# sourceMappingURL=d4f92369b168e72ede937a92695e3938031fb511.js.map