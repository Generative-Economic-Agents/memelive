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
//# sourceMappingURL=33fe8a6d095e8a8cab13e8a9acfd4cf8f23be430.js.map