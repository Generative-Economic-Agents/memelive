System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var assocIndexOf;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  return {
    setters: [function (_unresolved_) {
      assocIndexOf = _unresolved_.default;
    }],
    execute: function () {
      _export("default", listCacheGet);
    }
  };
});
//# sourceMappingURL=d16f47c25e8489803a51f7e6fbf3b4404e923b5c.js.map