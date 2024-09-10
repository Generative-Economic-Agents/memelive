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
//# sourceMappingURL=4b5dc822232e0b123c8901f922a0d976cbfaa0e4.js.map