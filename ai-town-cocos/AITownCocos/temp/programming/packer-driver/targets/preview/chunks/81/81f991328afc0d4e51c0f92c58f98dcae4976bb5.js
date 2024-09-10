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
//# sourceMappingURL=81f991328afc0d4e51c0f92c58f98dcae4976bb5.js.map