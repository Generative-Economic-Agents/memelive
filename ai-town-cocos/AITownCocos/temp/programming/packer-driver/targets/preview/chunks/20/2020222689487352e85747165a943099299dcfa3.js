System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var arrayPush, isArray;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  return {
    setters: [function (_unresolved_) {
      arrayPush = _unresolved_.default;
    }, function (_unresolved_2) {
      isArray = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", baseGetAllKeys);
    }
  };
});
//# sourceMappingURL=2020222689487352e85747165a943099299dcfa3.js.map