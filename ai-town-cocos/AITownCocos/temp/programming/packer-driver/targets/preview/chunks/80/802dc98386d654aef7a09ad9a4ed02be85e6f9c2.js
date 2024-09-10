System.register([], function (_export, _context) {
  "use strict";

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  return {
    setters: [],
    execute: function () {
      _export("default", cacheHas);
    }
  };
});
//# sourceMappingURL=802dc98386d654aef7a09ad9a4ed02be85e6f9c2.js.map