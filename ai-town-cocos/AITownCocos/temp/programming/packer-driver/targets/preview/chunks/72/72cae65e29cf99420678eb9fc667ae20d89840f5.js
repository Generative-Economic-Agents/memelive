System.register([], function (_export, _context) {
  "use strict";

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);
    this.size = data.size;
    return result;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", stackDelete);
    }
  };
});
//# sourceMappingURL=72cae65e29cf99420678eb9fc667ae20d89840f5.js.map