System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var copyObject, getSymbols;

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }

  return {
    setters: [function (_unresolved_) {
      copyObject = _unresolved_.default;
    }, function (_unresolved_2) {
      getSymbols = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", copySymbols);
    }
  };
});
//# sourceMappingURL=9fea18421a759a56386822aa24b5ea39ee574ae9.js.map