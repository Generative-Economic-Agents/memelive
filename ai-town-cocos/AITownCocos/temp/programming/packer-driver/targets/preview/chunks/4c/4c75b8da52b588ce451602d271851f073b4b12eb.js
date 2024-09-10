System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var Hash, ListCache, Map;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map || ListCache)(),
      'string': new Hash()
    };
  }

  return {
    setters: [function (_unresolved_) {
      Hash = _unresolved_.default;
    }, function (_unresolved_2) {
      ListCache = _unresolved_2.default;
    }, function (_unresolved_3) {
      Map = _unresolved_3.default;
    }],
    execute: function () {
      _export("default", mapCacheClear);
    }
  };
});
//# sourceMappingURL=4c75b8da52b588ce451602d271851f073b4b12eb.js.map