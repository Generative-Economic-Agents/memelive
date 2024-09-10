System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var MapCache, setCacheAdd, setCacheHas;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();

    while (++index < length) {
      this.add(values[index]);
    }
  } // Add methods to `SetCache`.


  return {
    setters: [function (_unresolved_) {
      MapCache = _unresolved_.default;
    }, function (_unresolved_2) {
      setCacheAdd = _unresolved_2.default;
    }, function (_unresolved_3) {
      setCacheHas = _unresolved_3.default;
    }],
    execute: function () {
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;

      _export("default", SetCache);
    }
  };
});
//# sourceMappingURL=9d978b961416fcbbcb99032f5c582e3eacd4c28f.js.map