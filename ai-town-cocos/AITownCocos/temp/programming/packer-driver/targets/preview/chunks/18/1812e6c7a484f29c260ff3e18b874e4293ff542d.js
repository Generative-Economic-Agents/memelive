System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function (object) {
      return object == null ? undefined : object[key];
    };
  }

  return {
    setters: [],
    execute: function () {
      _export("default", baseProperty);
    }
  };
});
//# sourceMappingURL=1812e6c7a484f29c260ff3e18b874e4293ff542d.js.map