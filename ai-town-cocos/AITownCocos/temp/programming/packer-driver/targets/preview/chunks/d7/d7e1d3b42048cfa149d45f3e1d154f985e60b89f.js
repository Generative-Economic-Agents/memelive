System.register([], function (_export, _context) {
  "use strict";

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", listCacheClear);
    }
  };
});
//# sourceMappingURL=d7e1d3b42048cfa149d45f3e1d154f985e60b89f.js.map