System.register([], function (_export, _context) {
  "use strict";

  var HASH_UNDEFINED;

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);

    return this;
  }

  return {
    setters: [],
    execute: function () {
      /** Used to stand-in for `undefined` hash values. */
      HASH_UNDEFINED = '__lodash_hash_undefined__';

      _export("default", setCacheAdd);
    }
  };
});
//# sourceMappingURL=2513a8b3f611c3d171e7f79fd027069a966c6c6e.js.map