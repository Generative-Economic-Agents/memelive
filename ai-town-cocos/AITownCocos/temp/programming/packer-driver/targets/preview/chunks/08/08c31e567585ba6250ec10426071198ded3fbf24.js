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
//# sourceMappingURL=08c31e567585ba6250ec10426071198ded3fbf24.js.map