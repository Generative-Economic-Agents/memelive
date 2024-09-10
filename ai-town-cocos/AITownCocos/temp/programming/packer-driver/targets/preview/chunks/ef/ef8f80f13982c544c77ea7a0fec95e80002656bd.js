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
//# sourceMappingURL=ef8f80f13982c544c77ea7a0fec95e80002656bd.js.map