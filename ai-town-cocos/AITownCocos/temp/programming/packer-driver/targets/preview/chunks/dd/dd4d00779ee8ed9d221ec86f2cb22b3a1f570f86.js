System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var baseGetAllKeys, getSymbols, keys;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  return {
    setters: [function (_unresolved_) {
      baseGetAllKeys = _unresolved_.default;
    }, function (_unresolved_2) {
      getSymbols = _unresolved_2.default;
    }, function (_unresolved_3) {
      keys = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", getAllKeys);
    }
  };
});
//# sourceMappingURL=dd4d00779ee8ed9d221ec86f2cb22b3a1f570f86.js.map