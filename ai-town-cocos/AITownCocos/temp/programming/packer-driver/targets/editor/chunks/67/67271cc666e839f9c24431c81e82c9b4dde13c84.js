System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var ListCache, Map, MapCache, LARGE_ARRAY_SIZE;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;

    if (data instanceof ListCache) {
      var pairs = data.__data__;

      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }

      data = this.__data__ = new MapCache(pairs);
    }

    data.set(key, value);
    this.size = data.size;
    return this;
  }

  return {
    setters: [function (_unresolved_) {
      ListCache = _unresolved_.default;
    }, function (_unresolved_2) {
      Map = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapCache = _unresolved_3.default;
    }],
    execute: function () {
      /** Used as the size to enable large array optimizations. */
      LARGE_ARRAY_SIZE = 200;

      _export("default", stackSet);
    }
  };
});
//# sourceMappingURL=67271cc666e839f9c24431c81e82c9b4dde13c84.js.map