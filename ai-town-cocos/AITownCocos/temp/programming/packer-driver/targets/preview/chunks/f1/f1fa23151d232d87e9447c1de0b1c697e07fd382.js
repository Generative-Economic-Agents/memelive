System.register([], function (_export, _context) {
  "use strict";

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", hashDelete);
    }
  };
});
//# sourceMappingURL=f1fa23151d232d87e9447c1de0b1c697e07fd382.js.map