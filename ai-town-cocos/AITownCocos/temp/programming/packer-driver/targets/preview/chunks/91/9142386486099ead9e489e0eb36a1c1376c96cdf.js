System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var getNative, root, Promise;
  return {
    setters: [function (_unresolved_) {
      getNative = _unresolved_.default;
    }, function (_unresolved_2) {
      root = _unresolved_2.default;
    }],
    execute: function () {
      /* Built-in method references that are verified to be native. */
      Promise = getNative(root, 'Promise');

      _export("default", Promise);
    }
  };
});
//# sourceMappingURL=9142386486099ead9e489e0eb36a1c1376c96cdf.js.map