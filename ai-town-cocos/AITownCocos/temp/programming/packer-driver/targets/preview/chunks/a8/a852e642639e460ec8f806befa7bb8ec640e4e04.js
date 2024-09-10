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
//# sourceMappingURL=a852e642639e460ec8f806befa7bb8ec640e4e04.js.map