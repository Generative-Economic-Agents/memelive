System.register([], function (_export, _context) {
  "use strict";

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", isKeyable);
    }
  };
});
//# sourceMappingURL=bd14b94a2dc5ad0d5ffb1f97a5d429e8baf3677d.js.map