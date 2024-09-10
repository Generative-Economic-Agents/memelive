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
//# sourceMappingURL=755228eed79d4841123cc574c4499fbf1edb01e6.js.map