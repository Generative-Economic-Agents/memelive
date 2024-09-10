System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  return {
    setters: [function (_unresolved_) {
      getMapData = _unresolved_.default;
    }],
    execute: function () {
      _export("default", mapCacheDelete);
    }
  };
});
//# sourceMappingURL=0cd726f53dab7e5cedc436547ed4cd61df41ccce.js.map