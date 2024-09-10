System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var mapCacheClear, mapCacheDelete, mapCacheGet, mapCacheHas, mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `MapCache`.


  return {
    setters: [function (_unresolved_) {
      mapCacheClear = _unresolved_.default;
    }, function (_unresolved_2) {
      mapCacheDelete = _unresolved_2.default;
    }, function (_unresolved_3) {
      mapCacheGet = _unresolved_3.default;
    }, function (_unresolved_4) {
      mapCacheHas = _unresolved_4.default;
    }, function (_unresolved_5) {
      mapCacheSet = _unresolved_5.default;
    }],
    execute: function () {
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype['delete'] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;

      _export("default", MapCache);
    }
  };
});
//# sourceMappingURL=80072dec60f558cbeb4ce997e3ffac39e250c8dc.js.map