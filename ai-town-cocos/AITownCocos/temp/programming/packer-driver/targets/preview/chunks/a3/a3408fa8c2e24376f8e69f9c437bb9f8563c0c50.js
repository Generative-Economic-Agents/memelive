System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var nativeCreate, HASH_UNDEFINED, objectProto, hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;

    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }

    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  return {
    setters: [function (_unresolved_) {
      nativeCreate = _unresolved_.default;
    }],
    execute: function () {
      /** Used to stand-in for `undefined` hash values. */
      HASH_UNDEFINED = '__lodash_hash_undefined__';
      /** Used for built-in method references. */

      objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      hasOwnProperty = objectProto.hasOwnProperty;

      _export("default", hashGet);
    }
  };
});
//# sourceMappingURL=a3408fa8c2e24376f8e69f9c437bb9f8563c0c50.js.map