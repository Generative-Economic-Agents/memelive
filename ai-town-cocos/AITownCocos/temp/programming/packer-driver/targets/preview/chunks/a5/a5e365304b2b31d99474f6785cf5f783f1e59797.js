System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var identity, metaMap, baseSetData;
  return {
    setters: [function (_unresolved_) {
      identity = _unresolved_.default;
    }, function (_unresolved_2) {
      metaMap = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * The base implementation of `setData` without support for hot loop shorting.
       *
       * @private
       * @param {Function} func The function to associate metadata with.
       * @param {*} data The metadata.
       * @returns {Function} Returns `func`.
       */
      baseSetData = !metaMap ? identity : function (func, data) {
        metaMap.set(func, data);
        return func;
      };

      _export("default", baseSetData);
    }
  };
});
//# sourceMappingURL=a5e365304b2b31d99474f6785cf5f783f1e59797.js.map