System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseGetAllKeys, getSymbolsIn, keysIn;

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }

  return {
    setters: [function (_unresolved_) {
      baseGetAllKeys = _unresolved_.default;
    }, function (_unresolved_2) {
      getSymbolsIn = _unresolved_2.default;
    }, function (_unresolved_3) {
      keysIn = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", getAllKeysIn);
    }
  };
});
//# sourceMappingURL=91801bccce4a0af178471bdfd959b645b36e1250.js.map