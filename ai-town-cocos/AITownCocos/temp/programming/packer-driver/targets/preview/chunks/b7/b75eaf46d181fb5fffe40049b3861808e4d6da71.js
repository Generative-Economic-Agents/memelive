System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseHasIn);
    }
  };
});
//# sourceMappingURL=b75eaf46d181fb5fffe40049b3861808e4d6da71.js.map