System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var baseIsNative, getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  return {
    setters: [function (_unresolved_) {
      baseIsNative = _unresolved_.default;
    }, function (_unresolved_2) {
      getValue = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", getNative);
    }
  };
});
//# sourceMappingURL=1b7b0de32b3cace1d136e60dc9ae01cff2772fdc.js.map