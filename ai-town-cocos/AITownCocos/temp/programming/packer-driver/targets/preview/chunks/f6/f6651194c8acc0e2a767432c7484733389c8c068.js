System.register([], function (_export, _context) {
  "use strict";

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function (key) {
      return object == null ? undefined : object[key];
    };
  }

  return {
    setters: [],
    execute: function () {
      _export("default", basePropertyOf);
    }
  };
});
//# sourceMappingURL=f6651194c8acc0e2a767432c7484733389c8c068.js.map