System.register([], function (_export, _context) {
  "use strict";

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  return {
    setters: [],
    execute: function () {
      _export("default", setCacheHas);
    }
  };
});
//# sourceMappingURL=1608ac72c80c36f5af40e254985e6219252f6e41.js.map