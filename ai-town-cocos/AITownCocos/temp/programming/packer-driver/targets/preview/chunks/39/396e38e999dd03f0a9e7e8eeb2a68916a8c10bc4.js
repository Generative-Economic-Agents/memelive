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
//# sourceMappingURL=396e38e999dd03f0a9e7e8eeb2a68916a8c10bc4.js.map