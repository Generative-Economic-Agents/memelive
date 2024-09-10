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
//# sourceMappingURL=ac5249ac65958fd5ef5a5481cf1ac813617367fe.js.map