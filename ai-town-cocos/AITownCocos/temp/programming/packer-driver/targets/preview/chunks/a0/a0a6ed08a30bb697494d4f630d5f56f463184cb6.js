System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var getMapData;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  return {
    setters: [function (_unresolved_) {
      getMapData = _unresolved_.default;
    }],
    execute: function () {
      _export("default", mapCacheGet);
    }
  };
});
//# sourceMappingURL=a0a6ed08a30bb697494d4f630d5f56f463184cb6.js.map