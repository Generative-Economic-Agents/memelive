System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var nativeCreate, objectProto, hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  return {
    setters: [function (_unresolved_) {
      nativeCreate = _unresolved_.default;
    }],
    execute: function () {
      /** Used for built-in method references. */
      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;

      _export("default", hashHas);
    }
  };
});
//# sourceMappingURL=49196999b4274865d48bb084d15e3013d6384dbd.js.map