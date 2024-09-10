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
//# sourceMappingURL=52a29ad9272aa894dc303aafb64541a00641abdb.js.map