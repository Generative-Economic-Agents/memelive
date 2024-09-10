System.register([], function (_export, _context) {
  "use strict";

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  return {
    setters: [],
    execute: function () {
      _export("default", getValue);
    }
  };
});
//# sourceMappingURL=1bc4c55dbb62a30e680226a2d1dd9e2b940ab208.js.map