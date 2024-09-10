System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var assocIndexOf;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  return {
    setters: [function (_unresolved_) {
      assocIndexOf = _unresolved_.default;
    }],
    execute: function () {
      _export("default", listCacheHas);
    }
  };
});
//# sourceMappingURL=29dc8bd744f63a216462d65ec46c1cead5459e57.js.map