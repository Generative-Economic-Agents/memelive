System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var metaMap, noop, getData;
  return {
    setters: [function (_unresolved_) {
      metaMap = _unresolved_.default;
    }, function (_unresolved_2) {
      noop = _unresolved_2.default;
    }],
    execute: function () {
      /**
       * Gets metadata for `func`.
       *
       * @private
       * @param {Function} func The function to query.
       * @returns {*} Returns the metadata for `func`.
       */
      getData = !metaMap ? noop : function (func) {
        return metaMap.get(func);
      };

      _export("default", getData);
    }
  };
});
//# sourceMappingURL=0e5f5db52c6671e56702f1f6eb6caf6cdcc31ab3.js.map