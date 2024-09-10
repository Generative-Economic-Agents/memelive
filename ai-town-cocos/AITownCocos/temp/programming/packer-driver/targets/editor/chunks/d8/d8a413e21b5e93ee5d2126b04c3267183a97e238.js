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
//# sourceMappingURL=d8a413e21b5e93ee5d2126b04c3267183a97e238.js.map