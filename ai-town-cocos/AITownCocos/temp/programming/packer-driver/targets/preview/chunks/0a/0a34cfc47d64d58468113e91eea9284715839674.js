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
//# sourceMappingURL=0a34cfc47d64d58468113e91eea9284715839674.js.map