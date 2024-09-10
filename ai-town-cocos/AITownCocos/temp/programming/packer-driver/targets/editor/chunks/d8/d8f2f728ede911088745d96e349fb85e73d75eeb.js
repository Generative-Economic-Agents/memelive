System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var getMapData;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  return {
    setters: [function (_unresolved_) {
      getMapData = _unresolved_.default;
    }],
    execute: function () {
      _export("default", mapCacheHas);
    }
  };
});
//# sourceMappingURL=d8f2f728ede911088745d96e349fb85e73d75eeb.js.map