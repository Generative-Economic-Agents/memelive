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
//# sourceMappingURL=c62fec62b308e27e89423accf988ce960b21f202.js.map