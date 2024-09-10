System.register([], function (_export, _context) {
  "use strict";

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  return {
    setters: [],
    execute: function () {
      _export("default", stackGet);
    }
  };
});
//# sourceMappingURL=4785bdd98d39438fa408f0f06598f2a667933834.js.map