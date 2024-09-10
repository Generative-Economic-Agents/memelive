System.register([], function (_export, _context) {
  "use strict";

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  return {
    setters: [],
    execute: function () {
      _export("default", stackHas);
    }
  };
});
//# sourceMappingURL=497f132c3266b34e89ec047cd3b94dc387d7b80e.js.map