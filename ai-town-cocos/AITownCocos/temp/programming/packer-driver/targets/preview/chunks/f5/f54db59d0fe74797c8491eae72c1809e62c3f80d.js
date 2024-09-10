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
//# sourceMappingURL=f54db59d0fe74797c8491eae72c1809e62c3f80d.js.map