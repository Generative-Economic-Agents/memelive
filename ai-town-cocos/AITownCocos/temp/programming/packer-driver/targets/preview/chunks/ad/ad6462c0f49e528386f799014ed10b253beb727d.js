System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var listCacheClear, listCacheDelete, listCacheGet, listCacheHas, listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `ListCache`.


  return {
    setters: [function (_unresolved_) {
      listCacheClear = _unresolved_.default;
    }, function (_unresolved_2) {
      listCacheDelete = _unresolved_2.default;
    }, function (_unresolved_3) {
      listCacheGet = _unresolved_3.default;
    }, function (_unresolved_4) {
      listCacheHas = _unresolved_4.default;
    }, function (_unresolved_5) {
      listCacheSet = _unresolved_5.default;
    }],
    execute: function () {
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype['delete'] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;

      _export("default", ListCache);
    }
  };
});
//# sourceMappingURL=ad6462c0f49e528386f799014ed10b253beb727d.js.map