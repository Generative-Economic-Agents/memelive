System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var copyObject, getSymbolsIn;

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }

  return {
    setters: [function (_unresolved_) {
      copyObject = _unresolved_.default;
    }, function (_unresolved_2) {
      getSymbolsIn = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", copySymbolsIn);
    }
  };
});
//# sourceMappingURL=13b92a30f0136389d94fdefe7824fd70f337ff14.js.map